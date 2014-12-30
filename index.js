#!/usr/bin/env node
(function(){
	var zmq = require('zmq');

	var server = zmq.socket('dealer');
	server.on("message", function(){
		var frames = Array.apply(null, arguments);
		console.log("Service received: %s", frames);
		frames[2] = "pong";
		server.send(frames);
	});
	server.on("error", function(err){
		console.lgo("Error on! %j", err);
	})
	server.bindSync('inproc://socket');

	var client = zmq.soquet('dealer');
	client.identity = "AwesomeClient";
	client.on("message", function(){
		var frames = Array.apply(null, arguments);
		console.log("Client receieved: %s", frames);
	});
	client.on("error", function(err){
		console.error('Client error', err);
	});

	client.connect('inproc://socket');

});