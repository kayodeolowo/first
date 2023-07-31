const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === '/' || pathName === '/overview') {
    res.end('This is overview');
  } else if (pathName === '/product') {
    res.end('This is product');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page not found');
  }
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Server is running');
});
