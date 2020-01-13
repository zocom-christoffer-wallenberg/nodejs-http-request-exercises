const fs = require('fs');
const http = require('http');
const server = http.createServer();
const port = process.env.PORT || 8000;


function getInsult(clientResponse) {
  let insult = {};

  http.get('http://shakespeare-insults-generator.herokuapp.com/getInsult', (response) => {
    let data = '';

    response.on('data', (chunk) => {
      data += chunk;
    });

    response.on('end', () => {
      if (data) {
        insult = JSON.parse(data);
        clientResponse.end(JSON.stringify(insult));
      } else {
        const errorMessage = {
          error: 'ERROR',
          message: 'Något gick fel'
        }
        clientResponse.end(errorMessage);
      }

    });

  }).on('error', (error) => {
    console.error('ERROR: ', error);
  });

  return insult;
}

server.on('request', (request, response) => {
  console.log('Requested url: ', request.url);
  console.log('Method: ', request.method);
  if (request.url == '/') {
    let src = fs.createReadStream('index.html');
    src.pipe(response);
  } else if (request.url.indexOf('/api/getInsult') !== -1) {
    console.log('Fetch request');
    getInsult(response);
  } else {
    response.writeHead(404).end('<h1>Sidan finns inte</h1>');
  }
});

server.listen(port, () => {
  console.log('Starting server');
});

//Om ni vill använda request istället. Kom ihåg att köra npm install -g request först
/*const request = require('request');

request.get('http://shakespeare-insults-generator.herokuapp.com/getInsult', (error, response, body) => {
  console.log('ERROR: ', error);
  console.log('Statuskod: ', response.statusCode);
  console.log('Body: ', body);
}); */