var http = require('http');
var exec = require('child_process').exec;
var createHandler = require('github-webhook-handler');

// '/auto_build' 和 'secretKey' 和下一步在GitHub中配置Webhook中的内容相同
var handler = createHandler({ path: '/auto_build', secret: 'secretKey' });
http.createServer(function (req, res) {
    handler(req, res, function (err) {
        res.statusCode = 404;
        res.end('no such location');
    })
}).listen(6606);

handler.on('error', function (err) {
    console.error('Error:', err.message)
});

handler.on('push', function (event) {
    console.log('Received a push event');
    // continuous_integration.sh 中是进行部署的动作
    exec("./continuous_integration.sh", function(err,stdout,stderr){
        if(err) {
            console.log('error:'+stderr);
        } else {
            console.log("stdout:"+stdout);
        }
    });
});