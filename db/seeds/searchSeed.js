var Search=require('../models/model');
const mongoose =require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');
const db = mongoose.connection;

mongoose.connection.collections['searches'].drop( function(err) {
  console.log('collection dropped');
});

//helper function


var getNextId = function () {

  return nextId++;
};
var titleArr=['shinningServices','cody barkery','hailey farmes', 'space station','pardox interactive','Valve','google','facebook','linkdin','amazon','gloria fish hunting','nike'];
var catagoriesArr=['online','parking','cooking','food services','game stops','bomb maker','fantasy land'];
var randomNumber=(arr)=>{
  return arr[Math.floor(Math.random() * arr.length)];
};
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
//
var nextId = 4;
var imagePath='<img src="picture.jpg"></img>';
var description='Hello world';
for(var i=0;i<10;i++){


  var searchs=new Search({

    id:nextId,
    title:randomNumber(titleArr),
    description:description,
    catagories:randomNumber(catagoriesArr),
    img:imagePath,
    review:getRandomArbitrary(0,50),
  });
  getNextId();
  console.log(`current id is ${nextId}`);
  searchs.save((err)=>{
    if(err){
      console.log(err)
    }
  });

  console.log('seeding number is ',i);
}

