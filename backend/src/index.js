const express = require('express');
const { connectDb } = require('./helpers/db');
const { port, host, db, authApiUrl } = require('./configuration');
const mongoose = require("mongoose");
const app = express();
// const userSchema = new mongoose.Schema({
//     /** Имя пользователя */
//     name: {
//         type: String,
//         required: true
//     },
//     /** Почта пользователя */
//     email: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     /** Пароль пользователя */
//     password: {
//         type: String,
//         required: true
//     },
//     /** Дата регистрации пользователя */
//     register_date: {
//         type: Date,
//         default: Date.now
//     }
// });
//
// const User = mongoose.model('User', userSchema)

const startServer = () => {
    app.listen(port, () => {
        console.log('Started api server on port', port);
        console.log('Started api server on host', host);
        console.log('Started authApiUrl server on host', authApiUrl);
        console.log('Started authApiUrl server on host', db);
    })
}

app.get('/test', (req, res) => {
    res.send('Our API server is working correctly');
})

// app.use('/user', router.userRouter);
// app.use('/item', router.itemsRouter);
// app.use('/auth', router.userAuth);

connectDb()
    .on('error', console.log)
    .on('disconnect', connectDb)
    .once('open', startServer);