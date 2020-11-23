const http = require('http');

const server = http.createServer((req, res) => {

    const categoria = req.url;

    if(categoria === '/tecnologia') {
        res.end('<html><body><p>Tecnologia<p><body><html>')
    } else if(categoria === '/games') {
        res.end('<html><body><p>Games<p><body><html>')
    } else if(categoria === '/media') {
        res.end('<html><body><p>Media<p><body><html>')
    } else {
        res.end('<html><body><p>Portal de noticias(<p><body><html>')
    }
});

server.listen(3000);



