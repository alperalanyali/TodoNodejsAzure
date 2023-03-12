const mongoose = require('mongoose');

const uri = ""
const connectDatabase = ()=>{mongoose.connect("mongodb+srv://alper:1@tododb.v7akgp3.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology  :true
}).then((con)=>{
    console.log(`MongoDb database connected with host ${con.connection.host}`)
});
}

module.exports = connectDatabase;