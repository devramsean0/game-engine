function webserversections(express, app) {
    const webserverconfig = require('/engine/webserver/config.js')
    const webserverroutes = require('/engine/webserver/routes.js')
    const webserverdynamicroutes = require('/engine/webserver/dynamicroutes.js')
    webserverconfig(express, app)
    webserverdynamicroutes(app)
    webserverroutes(app)
}
function webservercall() {
    const express = require('express');
    const app = express()
    webserversections(express, app)
}
module.exports = webservercall;