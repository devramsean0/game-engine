function webserversections(express, app) {
    const webserverconfig = require('/engine/webserver/config.js')
    const webserverroutes = require('/engine/webserver/routes.js')
    const webserverdynamicroutes = require('/engine/webserver/dynamicroutes.js')
    const webserverstart = require('/engine/webserver/start.js')
    webserverconfig(express, app)
    console.log('called the webserver config')
    webserverdynamicroutes(app)
    console.log('called the dynamic routes')
    webserverroutes(app)
    console.log('called the standard routes')
    webserverstart(app)
    console.log('called the start')
    console.log('finished calling webserver sections')
}
function webservercall() {
    const express = require('express');
    const app = express()
    webserversections(express, app)
    console.log('called the webserver')
}
module.exports = webservercall;