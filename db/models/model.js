const mongoose =require('mongoose');




let searchSchema = new mongoose.Schema({
  id:Number,
  title: String,
  description:String,
  catagories:String,
  url:String,
  img: String,
  review:{type:Number,require:true}
})

module.exports=mongoose.model('search', searchSchema);

