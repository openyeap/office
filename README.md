# ABSLN 官网

基于 Hugo + Tailwind CSS v3 构建的静态官网。

## 项目结构

```
content/             # 页面内容（Markdown + HTML）
  _index.md          # 首页
  about.md           # 关于我们
  agent.md           # 多智能体平台
  dms.md             # DMS 数据管理系统
  koffer.md          # 安全解释器
  quant.md           # 量化实战
layouts/             # Hugo 模板与组件
assets/css/main.css  # Tailwind 入口样式
hugo.toml            # 站点配置
```

## 本地开发

```bash
# 启动开发服务器（热重载）
D:\Program\hugo\hugo.exe server --port 1313

# 构建生产版本
D:\Program\hugo\hugo.exe --minify

# 构建输出目录：public/
```

## 部署到 Cloudflare Pages

### 方式一：Wrangler CLI

```bash
# 安装并登录（仅首次）
npm install -g wrangler
npx wrangler login

# 构建并部署
D:\Program\hugo\hugo.exe --minify
npx wrangler pages deploy public
```

### 方式二：Git 自动部署

1. 推送代码到 GitHub / GitLab
2. Cloudflare Dashboard → Pages → Connect to Git
3. 构建命令：`hugo --minify`，输出目录：`public`

### 方式三：手动上传

[Cloudflare Pages](https://dash.cloudflare.com/pages) → 上传资产 → 拖入 `public` 文件夹。

## 技术栈

- **Hugo** — Go 语言静态网站生成器
- **Tailwind CSS v3** — 通过 Hugo Pipes + PostCSS 管道集成
- **自定义主题色** — 品牌蓝 #165DFF、深色 #1D2129、背景 #F5F7FA
