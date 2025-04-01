const moongose = require('mongoose');

const connectionString = 'mongodb+srv://sandeshjaiswal101:Sandesh101%40@nodeexpressproject.j2qsf.mongodb.net/TaskManager?retryWrites=true&w=majority&appName=NodeExpressProject'


const connectDB = (url) => {
    return moongose.connect(url);
}

module.exports = connectDB
