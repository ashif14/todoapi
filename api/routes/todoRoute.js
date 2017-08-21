'use strict';

module.exports = function(app) {
	var todoList = require('../controllers/todoController');


	app.use(function(req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		next();
	});

	
	app.route('/tasks')
	.get(todoList.listAllTasks);
		// .post(todoList.createTask);

		app.route('/tasks/createTask')
		.post(todoList.createTask);


		app.route('/tasks/:taskId')
		.get(todoList.readTask)
		.put(todoList.updateTask)
		.delete(todoList.deleteTask);
	};