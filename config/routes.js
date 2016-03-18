var users = require('../server/controllers/users.js');
// var orders = require('../server/controllers/orders.js');

module.exports = function(app){

	app.post('/login', function (req, res){
		users.login(req,res)
	})
	app.post('/register', function (req, res){
		users.register(req,res)
	})
	// app.post('/delete_customer', function (req, res){
	// 	customers.remove(req, res);
	// })
	// app.post('/create_order', function (req, res){
	// 	orders.add(req, res);
	// })
	// app.get('/get_orders', function (req, res){
	// 	orders.show(req, res);
	// })
}