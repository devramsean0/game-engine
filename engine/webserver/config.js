function webserverconfig(express, app) {
    app.set("view engine", "html");
    app.set("views", __dirname + "/views");
    console.log('configured the webserver')
}
module.exports = webserverconfig;