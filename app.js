const connectDB = require('./db/connect');
require('dotenv').config();
const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const {auth} = require('express-openid-connect');
const home = require('./routes/home');

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: 'a long, randomly-generated string stored in env',
    baseURL: 'http://localhost:3000',
    clientID: 'xVfW8a9DAQD6KRIQWz8DgYbCUdyYoyZD',
    issuerBaseURL: 'https://dev-q5f6tll678jgggz4.us.auth0.com'
  };


//middleware
// app.use(express.static('./public'));
app.use(express.json());
app.use(auth(config));

//routes 
app.use('/api/v1/',tasks);
// app.use('/',home);

app.get('/', (req, res) => {
  res.send(
    req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out'
  )
});

const port = process.env.PORT || 3000;
const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`Server is listening on port ${port}...`));
    } catch (error) {
        console.log(error);
    }
}
start();