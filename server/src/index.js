const http = require('http');
const characters = require('./utils/data');
const PORT = 3001;

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.url.includes('/rickandmorty/character')) {
        const id = req.url.split('/').pop();
        const character = characters.filter(char => char.id === Number(id))[0];
        res.writeHead(200, { 'content-type': 'application/json' });
        res.end(JSON.stringify(character));
    }
}).listen(PORT, 'localhost');