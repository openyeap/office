# ABSLN 官网

基于 Hugo 构建的静态官网。
 

## 本地开发

```bash
# 启动开发服务器（热重载）
hugo server
# 构建生产版本
hugo --minify

# 构建输出目录：public/
```

## 部署到 Cloudflare Pages

1. Cloudflare Dashboard → Pages → Connect to Git
2. 构建命令：`hugo --minify`，输出目录：`public`


## 技术栈

- **Hugo** — Go 语言静态网站生成器
- **纯 CSS** — 无框架依赖，直接通过 Hugo Pipes 构建
- **自定义主题色** — 品牌蓝 #165DFF、深色 #1D2129、背景 #F5F7FA
