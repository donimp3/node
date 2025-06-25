const http = require('http');

const message = process.env.MESSAGE || 'Përshëndetje nga Node.js!';

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(message);
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Serveri u nis në portën ${PORT}`);
});
