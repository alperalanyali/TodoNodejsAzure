const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require("uuid");
const connection = require('./database/database');
const Todo = require('./models/todo');

// const todoRouter = require('./router/todo');
//Connection to Mongoose
 connection();

 
const app = express();
app.use(express.json());
app.use(cors());

// app.use("/api/v1/todo/",todoRouter);

app.get('/api/todo/getall',async (req,res)=>{
   const todos = await Todo.find();
   
    res.json({
        results:todos.length,
        data:todos
    })
});


const port = process.env.PORT || 3000

app.listen(port,()=>{
    console.log('listening on port '+port);
})