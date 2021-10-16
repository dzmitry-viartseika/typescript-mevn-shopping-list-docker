const service = require('../services/user-services');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const user = require('../model/User');
class UserController {
    login(req, res) {
        console.log('login', res);
    };
}

module.exports = UserController;