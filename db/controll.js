
var Search=require('../db/models/model');




let fetchData=function(callback){
  Search.find({},function(err,data){
    if(err){
      console.log(err)
    }else{

      callback(data)
    }
  }).sort({'id':1}).limit(10)
}

let findOne=function(query,callback){
  Search.find(query,(err,data)=>{
    if(err){
      console.log(err);
    }else{
      callback(data);
    }
  }).sort({'id':1}).limit(10)
}
module.exports.fetchData=fetchData;
module.exports.findOne=findOne;