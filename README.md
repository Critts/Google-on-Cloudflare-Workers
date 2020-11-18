## Google on Cloudflare Workers

Workers 是著名 CDN 服务商 Cloudflare 推出的一款 Serverless 服务，用于运行轻量的 JavaScript 脚本。其提供两种套餐，分别是每天十万次请求额度的免费套餐，和每月一千万请求的 5 美元套餐。我们可以使用免费额度来搭建一个自用的 Google 或 Google Scholar 反向代理。

### 步骤

1. 为已有的域名添加任意 DNS 解析记录，且 Proxy Status 必须设置为 `Proxied`.
2. 创建一个 Workers 实例，将项目中 `index.js` 的内容覆盖进去。
3. 为该 Workers 实例分配一个请求路径，例如 `gg.example.com/*`。<mark>注意：切勿在域名中包含 Google 等关键词，否则域名可能遭到 DNS 污染。</mark>
4. 待 DNS 解析记录生效后，即可打开浏览器访问 `gg.example.com` 查看效果。