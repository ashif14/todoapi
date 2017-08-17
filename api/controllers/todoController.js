// 'use strict';

var mongoose = require('mongoose'),
task = mongoose.model('Tasks');


exports.listAllTasks = function(req, res) {
	res.set('Access-Control-Allow-Origin' , '*');
	res.set('Access-Control-Allow-Methods', 'GET');
	task.find({}, function(err, task) {
		if(err) {
			res.send(err);
		} 
		res.json(task);
	});
};


exports.createTask = function(req, res) {
	res.set('Access-Control-Allow-Origin' , 'http://localhost:3001');
	res.set('Access-Control-Allow-Methods', 'POST');
	res.set('Content-Type', 'application/json');
	var newTask = new task(req.body);
	console.log(req.body);
	// newTask.save(function(err, task) {
	// 	if(err)
	// 		res.send(err);
		res.json(req.body);
	// });
};

exports.readTask = function(req, res) {
	task.findById(req.params.taskId,function(err, task) {
		if(err)
			res.send(err);
		res.json(task);
	});
};

exports.updateTask = function(req, res) {
	task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(req, res){
		if(err)
			res.send(err);
		res.json(task);
	});
};

exports.deleteTask = function(req, res) {


	task.remove({ _id: req.params.taskId } , function(err, task) {
		if (err)
			res.send(err);
		res.json({ message: 'Task successfully deleted' });
	});
};
