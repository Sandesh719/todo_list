const { default: mongoose } = require('mongoose');
const moongose = require('mongoose');

const TaskSchema = moongose.Schema({
    name:{
        type: String,
        required: [true,'Name must be provided'],
        trim: true,
        maxLength: [20,'Name can not be more than 20 characters']
    },
    completed:{
        type: Boolean,
        default: false
    }
})



module.exports = mongoose.model('Task',TaskSchema);