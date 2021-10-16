const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    /** Имя пользователя */
    name: {
        type: String,
        required: true
    },
    /** Почта пользователя */
    email: {
        type: String,
        required: true,
        unique: true
    },
    /** Пароль пользователя */
    password: {
        type: String,
        required: true
    },
    /** Дата регистрации пользователя */
    register_date: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;