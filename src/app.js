const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('<html><body><p>Portal de noticias<p><body><html>')
})
app.get('/tecnologia', (req, res) => {
    res.send('<html><body><p>Tecnologia<p><body><html>')
})
app.get('/games', (req, res) => {
    res.send('<html><body><p>Games<p><body><html>')
})


app.listen(3000, () => {
    console.log('Server running on Express')
})