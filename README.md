# WebhookExample

[利用Github的Webhook功能进行持续集成](https://moonagic.com/continuous-integration-with-github-webhook/)
* `index.js`已废弃.
* `index2.js`需要配置的内容:

```JavaScript
// 在Webhooks中设定的secret
var secret = ''
// 在Webhooks中设定的Payload URL
var url = ''
...
// 监听地址端口
}).listen(6606, '127.0.0.1');
```

## 开启服务
```
npm install
node index2.js
```

## 简单的systemd启动服务
```
[Unit]
Description=GithubWebhookService

[Service]
WorkingDirectory=/home/webhook
ExecStart=/usr/bin/node path/to/index2.js

[Install]
WantedBy=multi-user.target
```
