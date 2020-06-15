const restify = require('restify')
const port = 3000;
const api = restify.createServer();

api.get('/', function (req, res, next) {
	res.send(200, 'Hello World');
});

api.listen(port, function() {
	console.log(`Api is running on port ${port}.`);
})