function webserverstart(app) {
    app.listen(80, () => {
        console.log("webserver listening on port 80");
    });
}
module.exports = webserverstart;