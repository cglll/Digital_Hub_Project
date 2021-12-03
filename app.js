const express = require('express');
const path = require('path');

const app = express();

const publicPath =path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

const port = 3000

app.listen(process.env.PORT || port, () => console.log(`Servidor corriendo en puerto ${port}`));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'));
});
app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'));
});
app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'));
});