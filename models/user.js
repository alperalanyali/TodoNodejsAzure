const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
    email:{
        type:String,
        required:true,
        validate:{
            validator: function(v){
                return /^[a-z0-9]+$/.test(v);
            },
            message:props => `${props.value} sadece küçük harfler ve rakamlar içermelidir!`
            
        }        
    },
    password:{
        type:String,
        required: true,
        set: function (value) {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(value, salt);
            return hash;
        }
    }
})

const User = mongoose.model('User',userSchema);
module.exports = User;