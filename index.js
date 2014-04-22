/**
 * Created by osavch on 22.04.2014.
 */
var server = require("./server"),
    router = require("./router");

server.start(router.route);