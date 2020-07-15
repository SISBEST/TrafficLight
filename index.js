const express = require('express');
var LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./light');
const app = express();
app.use(express.static('static'));
app.get('/', (req, res) => {
	res.send("<link rel='stylesheet' href='/style.css' /><h1>Status</h1><img src='" + localStorage.getItem('status') + ".svg' />");
});
app.listen(3000);