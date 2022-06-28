const mongoose =require("mongoose");

mongoose.connect('mongodb://localhost:27017/workregister')
.then(()=> {console.log("sucessfull connected");})
.catch((err)=> console.log(err));