var mongoose= require("mongoose");
var jwt = require("jsonwebtoken");
 Schema= mongoose.Schema;
  laptopCollection = mongoose.model("laptops", new Schema({
     "laptopName":{type:String},
     "laptopCompanyName":{type:String},
     "laptopCost":{type:Number},
     "laptopId":{type:Number}
 }))
 function LaptopModel(){
this.laptopCollection = laptopCollection;
 }
LaptopModel.prototype.getAll = function(callback){
//      var token = req.headers['x-access-token'];
//      jwt.verify(token, "mounika", function(err, decoded){
// console.log(err,decoded,"shourya");
// if(err){
//     callback(err,{status:403,message:"tokent error"});
// }
//     })
this.laptopCollection.find({}, callback);
};

LaptopModel.prototype.create = function(data,callback){
//     // var token = jwt.sign(data, "mounika");
//     //  data.token= token;
//     //  console.log(token,"mona");
//     //callback(null,data);
     var laptopCreate =  new laptopCollection(data);
// this.laptopCollection.create(data,function(err,data){
//     var laptopsRecord = data._doc;
//     var token = jwt.sign(data._doc, "mounika");
//      laptopsRecord["token"]= token;
//     callback(err,laptopsRecord);
// });
laptopCreate.save(function(err,data){
    console.log(err,data);
    callback(err,data.lean());
});

}
LaptopModel.prototype.update = function(data, id,callback){
    this.laptopCollection.update({laptopId:id},data,callback)
}
LaptopModel.prototype.delete= function(id,callback){
    this.laptopCollection.remove({laptopId:id},callback)
}
module.exports = LaptopModel;