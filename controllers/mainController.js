const path = require('path');

const mainController = {
    index: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/index.html'));
    },
    register: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/register.html'));
    },
    login: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/login.html'));
    },
    productCar: (req,res) =>{
        res.render(path.join(__dirname, '../views/productCar'))
    }
};


module.exports = mainController;