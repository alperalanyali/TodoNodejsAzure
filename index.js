const express = require('express');
const cors = require('cors');
const connection = require('./database/database');
const Todo = require('./models/todo');

const todoRouter = require('./router/todo');
//Connection to Mongoose
 connection();

 
const app = express();
app.use(express.json());
app.use(cors());

app.get('/test',(req,res)=>{
    res.json({
        message:"Api çalışıyor"
    })
})

app.use("/api/v1/todo",todoRouter);

// app.get('/api/todo/getall',async (req,res)=>{
//    const todos = await Todo.find();
   
//     res.json({
//         results:todos.length,
//         data:todos
//     })
// });

const port = process.env.PORT || 3000

app.listen(port,()=>{
    console.log('listening on port '+port);
})