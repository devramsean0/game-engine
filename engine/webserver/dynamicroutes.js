const { dynamicroutes } = require('/engine/settings.json');
function routesloader(app, dynamicroutes) {
    let arraynum = 0;
    app.get(`${dynamicroutes[arraynum]}`, (request, response) => {
        response.render(dynamicroutes[arraynum]);
    });
    let oldarraynum = arraynum
    arraynum = oldarraynum + 1;
}
function webserverdynamicroutes(app) {
    dynamicroutes.array.forEach(routesloader);
    console.log('called the dynamic routes loader')
}
module.exports = webserverdynamicroutes;