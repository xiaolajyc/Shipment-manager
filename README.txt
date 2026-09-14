海运管理 PWA（Flat 结构）

文件全部位于同一目录根部：
- index.html
- manifest.webmanifest
- sw.js
- icon.svg
- icon-192.png
- icon-512.png

部署：把整个目录上传到 GitHub Pages、Netlify、Cloudflare Pages 等 HTTPS 静态托管。
然后用手机浏览器访问 index.html 对应的网址，再“添加到主屏幕”。

注意：PWA 的 Service Worker 需要 HTTPS（localhost 开发环境除外）。
数据仍然保存在浏览器本地，不会因为变成 PWA 就自动上传到云端。
