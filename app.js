const express = require('express');
const path = require('path');
const mainRouters = require('./routers/mainRouter');

const app = express();

const port = process.env.PORT || 3000;

const publicPath =path.resolve(__dirname, 'public');

app.use(express.static(publicPath));

app.use('/', mainRouters);

app.set('view engine','ejs')

app.listen(process.env.PORT || port, () => console.log(`Servidor corriendo en puerto ${port}`));

app.set("view engine", "ejs")