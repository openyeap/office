---
name: hugo-tailwind-site
description: Hugo 静态网站搭建全流程 — 从设计稿到多页面站点（Tailwind CSS v3 + Hugo Pipes + 组件化模板体系）
source: auto-skill
extracted_at: '2026-06-07T08:12:00.000Z'
---

# Hugo + Tailwind CSS 静态站点搭建

## 适用场景
- 将单页或多页 HTML 设计稿迁移为 Hugo 静态网站生成器项目
- 需要响应式布局、组件复用、内容管理的多页面官网
- 页面数量 > 3，有共享的导航/页脚/组件

## 核心流程

### 1. 项目初始化

```
hugo new site <site-name>
cd <site-name>
npm init -y
npm install -D tailwindcss postcss postcss-cli autoprefixer
```

### 2. 配置文件 (hugo.toml)

必须明确的项：
- `baseURL` — 部署域名（本地开发可为 `/`）
- `defaultContentLanguage = "zh-cn"`
- `[markup.goldmark.renderer] unsafe = true` — 允许内容中的内联 HTML
- `disableKinds` — 禁用不需要的分类/tag 自动页

### 3. Tailwind CSS 集成（Hugo Pipes 方式）

**assets/css/main.css:**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
/* 自定义组件样式用 @layer components {} */
```

**tailwind.config.js** — 扩展主题色、maxWidth、字体系列：
```js
module.exports = {
  content: ["layouts/**/*.html", "content/**/*.md"],
  theme: {
    extend: {
      colors: { brand: "#165DFF", deep: "#1D2129", surface: "#F5F7FA", ... },
      maxWidth: { content: "1200px" },
    }
  }
}
```

**postcss.config.js:**
```js
module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
  ]
}
```

**在 baseof.html 中通过 Hugo Pipes 引入：**
```go-html-template
{{ $styles := resources.Get "css/main.css" | resources.PostCSS }}
{{ if hugo.IsProduction }}
  {{ $styles = $styles | resources.Minify | resources.Fingerprint }}
{{ end }}
<link rel="stylesheet" href="{{ $styles.RelPermalink }}">
```

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

- `max-w-content` (1200px) + `mx-auto` + `px-4` (16px 移动端内边距) 作为内容容器
- 卡片网格：`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
- 导航：PC 横排 `flex`，移动端汉堡菜单 `lg:hidden`

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
- PostCSS 需全局安装：`npm install -g postcss-cli`

### Tailwind CSS v3 + Hugo Pipes
- `@apply` 指令中**不支持响应式变体**（如 `@apply lg:block`），改用标准 CSS 媒体查询
- Hugo Pipes 的 `hugo.IsProduction` 在部分版本不可用 → 简化为始终 minify + fingerprint

### 锚点导航
- 页面内的 section 需要明确的 `id` 属性供悬浮导航定位
- 检查所有锚点链接与目标 `id` 一一对应
