const mongoose = require('./database/index.js')

const UserSchema = new mongoose.Schema({
    nome:{
        type: String,
        require: true,
    },

    telefone: {
        type: String,
        required: true
    },
    
    saldo:{
        type: Number,
        default: 0
    },

    
});



const User = mongoose.model('User', UserSchema);

module.exports = User;