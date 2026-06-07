---
name: hugo-tailwind-site
description: Hugo 静态网站搭建全流程 — 从设计稿到多页面站点（纯 CSS + Hugo Pipes + 组件化模板体系）
source: auto-skill
extracted_at: '2026-06-07T09:13:10.388Z'
---

# Hugo + 纯 CSS 静态站点搭建

## 适用场景
- 将单页或多页 HTML 设计稿迁移为 Hugo 静态网站生成器项目
- 需要响应式布局、组件复用、内容管理的多页面官网
- 页面数量 > 3，有共享的导航/页脚/组件

## 核心流程

### 1. 项目初始化

```
hugo new site <site-name>
```

无需 npm 依赖，CSS 直接通过 Hugo Pipes 构建。

### 2. 配置文件 (hugo.toml)

必须明确的项：
- `baseURL` — 部署域名（本地开发可为 `/`）
- `defaultContentLanguage = "zh-cn"`
- `[markup.goldmark.renderer] unsafe = true` — 允许内容中的内联 HTML
- `disableKinds` — 禁用不需要的分类/tag 自动页

### 3. CSS（Hugo Pipes 直接构建）

**assets/css/main.css** — 纯 CSS，无框架依赖：
```css
html {
  scroll-behavior: smooth;
}

.nav-link {
  position: relative;
}
.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  height: 2px;
  width: 0;
  background: #165DFF;
  transition: all 200ms;
}
.nav-link:hover::after {
  width: 100%;
}
/* 自定义组件样式、响应式媒体查询等 */
```

**在 baseof.html 中通过 Hugo Pipes 引入：**
```go-html-template
{{ $styles := resources.Get "css/main.css" | minify | fingerprint }}
<link rel="stylesheet" href="{{ $styles.RelPermalink }}">
```

不需要 PostCSS、Tailwind 等构建工具链，Hugo 原生 `resources.Get` + `minify` + `fingerprint` 即可。

### 4. 模板层级设计

```
layouts/
  _default/
    baseof.html    ← 全局框架（<head>/CSS/nav/footer/JS）
    single.html    ← 默认单页模板
    list.html      ← 列表/概览页模板
  index.html       ← 首页专用
  product/
    single.html    ← 产品详情页专用（可调用专属 partials）
```

### 5. 内容文件约定

Content 文件使用 `.md` 扩展名，frontmatter 中指定 layout：
```yaml
---
title: "页面标题"
layout: "product"     # 对应 layouts/product/single.html
---
<!-- 以下为内联 HTML 内容 -->
<section class="...">...</section>
```

页面级内容直接写 HTML（利用 goldmark unsafe=true），共享组件抽到 partials。

### 6. 组件化（Partials）

复用 2 次以上的 UI 块抽到 `layouts/partials/`:
- `nav.html` / `footer.html` — 全站共享
- `hero.html` / `cta.html` — 通用样式、内容参数化
- 产品特有组件 — 按功能模块命名（如 `features-sandbox.html`）

### 7. 响应式断点策略

使用 CSS 媒体查询控制响应式行为：
```css
/* 移动端优先，内容容器 */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
}

/* 卡片网格 */
.card-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}
@media (min-width: 640px) {
  .card-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (min-width: 1024px) {
  .card-grid { grid-template-columns: repeat(3, 1fr); }
}
```

## 8. 导航栏动态激活状态

Hugo 模板中通过 `.` 获取当前页面上下文，在 partial 中判断当前路由：

```go-html-template
<!-- 产品中心：匹配 /product/ 前缀的所有页 -->
<a href="/product/" class="nav-link {{ if hasPrefix .RelPermalink "/product/" }}text-brand font-medium{{ else }}text-deep hover:text-brand{{ end }}">产品中心</a>

<!-- 关于我们：精确匹配 -->
<a href="/about/" class="nav-link {{ if eq .RelPermalink "/about/" }}text-brand font-medium{{ else }}text-deep hover:text-brand{{ end }}">关于我们</a>
```

**关键点：**
- Logo 点击回首页后，首页不应有其他 nav item 高亮 → 移除独立"首页"链接，logo 即为首页入口
- `hasPrefix` 匹配路径前缀（覆盖子页面），`eq` 精确匹配单页
- 外部链接（如 `https://quant.absln.com`）不加激活判断，始终普通样式 + `target="_blank" rel="noopener"`

## 9. Frontmatter 是强制要求

即使内容文件是纯 HTML，也必须包含 frontmatter，否则 Hugo 生成空 `<title>` 导致 SEO 受损：

```yaml
---
title: "DMS 企业动态数据管理系统"
description: "全域数据资产底座 · 多租户 · 混合存储 · 全场景自定义"
---
<!-- HTML 内容 -->
```

每个 `.md` 文件开头必须有三横杠包围的 frontmatter，至少包含 `title` 和 `description`。

## 10. URL 简化：文件迁移法

Hugo 的 URL 由文件路径决定。简化 URL 只需移动文件：

| 操作 | 旧路径 | 新路径 | 效果 |
|------|--------|--------|------|
| 移动文件 | `content/product/dms.md` | `content/dms.md` | `/product/dms/` → `/dms/` |
| 移动文件 | `content/product/ablsn-agent.md` | `content/agent.md` | `/product/ablsn-agent/` → `/agent/` |

**必须同步更新所有内部链接：**
- `content/product/_index.md`（产品中心页卡片链接）
- `layouts/partials/home-products.html`（首页产品卡片）
- 各产品页 CTA 区的交叉链接
- `hugo.toml` 的 `baseURL`

用 `grep` 搜索旧路径确认无遗漏：`grep -r "/product/dms/" layouts/ content/`

## 11. Cloudflare Pages 部署

### Git 自动部署（推荐）
1. 将项目推送到 GitHub/GitLab
2. Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git
3. 配置构建参数：
   - **Build command:** `hugo --minify`
   - **Build output directory:** `public`
   - **Environment variable:** `HUGO_VERSION` = `0.145.0`
4. 每次 `git push` 自动构建部署

### 命令行直传
```bash
npx wrangler pages deploy public
```
需先 `npm i -g wrangler` 并登录 Cloudflare。

### 自定义域名
Pages → 项目 → Custom domains → 添加域名，Cloudflare 自动配置 DNS + SSL 证书。

## 常见坑

### Windows 环境
- 系统 `hugo` 命令可能被 `.bat` 包装脚本拦截 → 使用 `hugo.exe` 全路径直接调用

### CSS + Hugo Pipes
- Hugo Pipes 的 `resources.Minify` 会压缩 CSS，开发时可跳过 minify 便于调试
- 响应式样式统一使用标准 CSS 媒体查询，不使用框架变体

## 12. 从 Tailwind CSS 迁移到纯 CSS（无需改 HTML）

**场景：** 项目之前用 PostCSS + Tailwind，移除后 HTML 模板中仍大量使用 Tailwind utility classes（`bg-white`、`text-deep`、`flex`、`grid-cols-3` 等），页面样式全丢。

**策略：** 不改 HTML 模板，在 `assets/css/main.css` 中写一套纯 CSS 工具类，覆盖所有模板用到的 Tailwind 类。

### 步骤

**Step 1 — 全量扫描模板中的 Tailwind 类**

遍历 `layouts/` 下所有 `.html` 文件，提取所有使用的 Tailwind utility class（含 `sm:` / `lg:` / `hover:` / `group-hover:` 变体），排除已在 main.css 中定义的自定义类（如 `nav-link`、`card-hover`）。

**Step 2 — 按类别编写 CSS**

以 CSS 自定义属性定义主题色和字体，然后按类别输出：

1. **Reset/base** — `box-sizing`, `line-height`, `antialiased`
2. **Layout** — `display` / `flex` / `grid` / `position` / `order`
3. **Spacing** — `padding` / `margin` / `gap` / `space-y`（Tailwind 的 4px 基准）
4. **Sizing** — `width` / `height` / `max-width` / `min-height`
5. **Typography** — `font-size` / `font-weight` / `line-height` / `letter-spacing` / `text-align` / `font-family`
6. **Text colors** — 所有 `text-*` 类，含 `text-white/80` 用 `rgba()` 实现
7. **Backgrounds** — 所有 `bg-*` 类，含 `bg-white/95`。**Gradient 需要复制 Tailwind 的自定义属性机制：**
   ```css
   .bg-gradient-to-br {
     background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
   }
   .from-blue-50 {
     --tw-gradient-from: #eff6ff;
     --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(239 246 255 / 0));
   }
   .via-white {
     --tw-gradient-to: rgb(255 255 255 / 0);
     --tw-gradient-stops: var(--tw-gradient-from), #ffffff, var(--tw-gradient-to, rgb(255 255 255 / 0));
   }
   .to-surface {
     --tw-gradient-to: #f5f7fa;
   }
   ```
8. **Borders** — `border` / `border-*` / `rounded-*` / `divide-x`
9. **Effects** — `shadow-*` / `backdrop-blur`
10. **Transitions** — `transition-colors` / `rotate-*`
11. **Interactive** — `hover:*` / `group-hover:*`
12. **Misc** — `z-*` / `overflow-*` / `prose`
13. **Responsive** — `@media (min-width: 640px)` / `768px` / `1024px` 包裹对应类

**Step 3 — 覆盖自定义组件**

保留原项目中独立定义的自定义类（nav-link、card-hover、anchor-dot、code-block 等），放在文件末尾。

### 关键对照表

| Tailwind 值 | CSS 等效 |
|---|---|
| `w-3` / `h-3` | `width: 12px;` / `height: 12px;` |
| `p-4` | `padding: 16px;` |
| `mb-6` | `margin-bottom: 24px;` |
| `gap-8` | `gap: 32px;` |
| `text-white/80` | `color: rgba(255,255,255,0.8);` |
| `space-y-2` | `> * + * { margin-top: 8px; }` |
| `divide-x` | `> :not(:first-child) { border-left: 1px solid; }` |
| `.hover\:text-brand:hover` | 类名包含 `:` 时需转义为 `\:` |
| `group-hover:bg-green-100` | `.group:hover .group-hover\:bg-green-100 { ... }` |

### 最终效果
- CSS 体积从 Tailwind 完整库的 ~23KB 缩减到精确覆盖的 ~12KB
- 零 npm 依赖，Hugo Native Pipes 直接 `resources.Get "css/main.css" | minify | fingerprint`
- 所有 HTML 模板无需改动，class 名完全一致

### 锚点导航
- 页面内的 section 需要明确的 `id` 属性供悬浮导航定位
- 检查所有锚点链接与目标 `id` 一一对应

## 13. 全局缩放布局（不改 HTML）

**场景：** 整体页面显得太小、字体和间距偏小，需要全局放大，但不希望改动任何 HTML 模板。

**策略：** 由于 CSS 工具类与 HTML class 名解耦，直接修改 `main.css` 中各类的 **属性值** 即可实现全局缩放，无需动模板。

### 需要调整的维度

| 维度 | 调整对象 | 示例 |
|------|----------|------|
| 内容区宽度 | `--max-w-content` CSS 变量 | `1200px` → `1400px` |
| 字体层级 | 全部 `text-*` 类（含 sm:/lg: 变体） | 整体放大 15-20% |
| Section 间距 | `py-10` / `py-20` / `lg:py-24` / `lg:py-28` | `80px` → `96px` |
| 卡片内边距 | `p-4` / `p-5` / `p-6` / `px-*` | `16px` → `20px` |
| 卡片间距 | `gap-6` / `gap-8` / `gap-10` / `gap-12` | `24px` → `32px` |
| 图标尺寸 | `w-7` / `h-7` / `w-14` / `h-14` | `28px` → `32px` / `56px` → `64px` |
| 最大宽度 | `max-w-lg` / `max-w-xl` 等 | 同步放大保持比例 |
| 下边距 | `mb-10` / `mb-12` | `40px` → `48px` |

### 操作原则
- 只改 `assets/css/main.css` 中的属性值，不改类名
- 所有响应式变体（`sm:` / `lg:`）中的值同步调整
- 调整后立即 `hugo` 构建验证，检查生成 CSS 中的数值确认生效

## 14. Windows Hugo.bat 包装脚本陷阱

**问题：** `where hugo` 输出指向 `.bat` 文件而非 `.exe`，该包装脚本会：
- 强制覆盖 `--config` 指向其他项目的配置文件
- 用 `-c "%cd%"` 将当前目录当作 content 源
- 构建后 `rd /s /q resources` 清理资源缓存
- 导致所有 Hugo 命令（包括 `hugo version`）都先触发错误构建

**解决：**
1. `where hugo` 找到 `.bat` 位置，打开查看实际 Hugo `.exe` 路径
2. 直接用 `.exe` 全路径，并显式传入所有关键目录参数：
   ```
   D:\Program\hugo\hugo.exe --config <project>\hugo.toml \
     --contentDir <project>\content \
     --layoutDir <project>\layouts \
     --themesDir "" \
     --destination <project>\public
   ```
