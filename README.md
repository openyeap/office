# ABSLN 官网

基于 Hugo 构建的静态官网。

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
assets/css/main.css  # 样式入口
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

1. Cloudflare Dashboard → Pages → Connect to Git
2. 构建命令：`hugo --minify`，输出目录：`public`


## 技术栈

- **Hugo** — Go 语言静态网站生成器
- **纯 CSS** — 无框架依赖，直接通过 Hugo Pipes 构建
- **自定义主题色** — 品牌蓝 #165DFF、深色 #1D2129、背景 #F5F7FA
