const http = require('http');
const fs = require('fs');

// Create server
const server = http.createServer((req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Handle POST requests to /print
  if (req.method === 'POST' && req.url === '/print') {
    let body = '';
    req.on('data', chunk => {
      body += chunk;
    });
    req.on('end', () => {
      console.log('Received message from client:', body);
      // Create JSON object with the received message
      const jsonData = JSON.parse(body);
      // Convert JSON object to string
      const jsonString = JSON.stringify(jsonData, null, 2);
      // Write JSON string to file
      fs.writeFile('data.json', jsonString, 'utf8', err => {
        if (err) {
          console.error('Error writing file:', err);
          res.statusCode = 500;
          res.end('Error writing file');
          return;
        }
        console.log('JSON file has been created!');
        res.end('JSON file created successfully');
      });
    });
  }
});

// Listen on port 3000
server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
