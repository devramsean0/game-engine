// import array
const { dynamicroutes } = require('/engine/settings.json');
// routes loader function
function routesloader(app, dynamicroutes) {
    let arraynum = 0;
    app.get(`${dynamicroutes[arraynum]}`, (request, response) => {
        response.render(dynamicroutes[arraynum]);
    });
    let oldarraynum = arraynum
    arraynum = oldarraynum + 1;
}
// load the route loader
function webserverdynamicroutes(app) {
    dynamicroutes.array.forEach(routesloader(app));
    console.log('called the dynamic routes loader')
}
// export smth
module.exports = webserverdynamicroutes;
