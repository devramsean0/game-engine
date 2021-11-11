function webserverconfig(express, app) {
    app.set("view engine", "html");
    app.set("views", "/game");
    console.log('configured the webserver')
}
module.exports = webserverconfig;