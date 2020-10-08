const mongoose = require('mongoose');



const { ObjectId } = mongoose.Schema
const projectSchema = mongoose.Schema({
    name:{
        type:String,
        maxLength: 32,
        trim:true
    },
    description: {
        type: String,
        maxLength: 2000
      },
    
    author:{
        type:String,
       
       
    },
    photo:{
        data: Buffer,
        contentType:String,
        
    },
    category:{
        type:ObjectId,
        ref:'Category',
        maxLength: 32
    },
    
}, { timestamps: true})


module.exports = mongoose.model('Project', projectSchema)