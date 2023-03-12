const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    _id:String,
    title:{
        type:String
    },
    isCompleted:Boolean,
    createdDate:Date
});

const todo = mongoose.model('Todo', todoSchema);
module.exports = todo;