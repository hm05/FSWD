const http = require('http');
const url = require('url');
const querystring = require('querystring');

let userData = {
  name: 'Harsh Murjani',
  age: 19,
};

function handleGetRequest(req, res) {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;

  if (path === '/get-user-data') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(userData));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Endpoint Not Found');
  }
}

function handlePostRequest(req, res) {
  let body = '';
  req.on('data', chunk => {
    body += chunk.toString();
  });

  req.on('end', () => {
    const parsedBody = querystring.parse(body);
    if (parsedBody.name && parsedBody.age) {
      userData = {
        name: parsedBody.name,
        age: parseInt(parsedBody.age, 10),
      };
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(userData));
    } else {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end('Invalid Request - Please provide valid name and age in the request body');
    }
  });
}

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    handleGetRequest(req, res);
  } else if (req.method === 'POST') {
    handlePostRequest(req, res);
  } else {
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    res.end('Method Not Allowed');
  }
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});