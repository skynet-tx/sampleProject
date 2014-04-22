/**
 * Created by osavch on 22.04.2014.
 */
var http = require("http"),
    url = require("url");

function start(route){
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");

        route(pathname);

        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello World");
        response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server was started. (http://localhost:8888/)");
}

exports.start = start;
