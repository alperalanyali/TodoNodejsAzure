const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');
const { v4: uuidv4 } = require("uuid");

router.get('/getAll',async (req,res)=>{
    const todos = await Todo.find();

    console.log(todos);
    res.status(200).json({
        results:todos.length,
        data:todos
    })
});

router.post('/create',async (req,res)=>{
    const {title} = req.body;
    const todo = new Todo({
        _id: uuidv4()   ,
        title:title,
        isCompleted:false,
        createdDate: new Date()
    });
    try {
        var result = await todo.save();

        res.status(200).json({
            message:"İşlem başarılı"
        })
    } catch (error) {
        res.status(404).json({message:"Kayıt oluştururken hata ile karşılaşıldı. Hata:" + error.message});
    }
})


module.exports = router;
