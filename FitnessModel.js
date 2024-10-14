const mongoose=require('mongoose');
const FitSchema=new mongoose.Schema({
    title:{
        type: String,
        required:true
    }
})

module.exports=mongoose.model('Fitness', FitSchema);