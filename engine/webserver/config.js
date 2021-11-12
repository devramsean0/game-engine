function webserverconfig(express, app) {
    app.set("view engine", "html");
    app.set("views", "/game");
    console.log('configured the webserver')
    app.get('/', (request, response) => {
        response.render('index);
    });
}
module.exports = webserverconfig;
