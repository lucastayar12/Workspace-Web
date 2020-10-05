var http = require('http');

var server = http.createServer(function(req,res) {
	res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
	res.end('Olá mundo!');
});

server.listen(3000, 'localhost', function(){
	console.log('Servidor iniciado em localhost:3000. Ctrl+C para encerrar…');
});