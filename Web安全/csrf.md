1. 第三方ip引诱客户去点击它的钓鱼链接。实际上是访问目标往网站，因为客户已经访问过的目标网站，cookie信息还保存，然后通过钓鱼链接可以信任访问目标网站的接口信息，实际上黑客已经通过用户完成自己对目标ip的操作
2. 防范：
   1. 使用token存储用户信息。
   2. 同源检测。Referer Header确定域名