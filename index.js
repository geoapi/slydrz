var db = require('./db'),
    _ = require('lodash'),
    express = db.express, 
    app = express(), 
    port = process.env.PORT || 4000,
    przn = db.api;


//Allow cors 
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Accept, Content-Type, Authorization, X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, PATCH, DELETE');

    if (req.method === 'OPTIONS') {
      res.send(200);
    } else {
      next();
    }
});

app.use(przn.router);

//Query to get driver orders
//app.get('/driver_orders/:id', function (req, res) {
//    ddAPI.adapter.findMany('order', {driver:req.params.id}).then(function(orders) {
//        res.json(orders);
//    });
//});




//app.use(express.static(__dirname+'/public'));

app.listen(port);

console.log('Listening on port ' + port + '...');
