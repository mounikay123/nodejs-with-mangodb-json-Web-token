var express = require("express"),
 laptopModel = require("../Models/laptopModel"),
lm = new laptopModel;
laptopController = function () {

}
laptopController.prototype.getAll = function (req, res) {
  
    lm.getAll(req,function (err, result) {
        res.send(result);
    })
}
laptopController.prototype.create = function (req, res) {
    lm.create(req.body, function (err, result) {
        res.send(result);
    })
}
laptopController.prototype.update = function(req,res){
    lm.update(req.body, req.params.id, function(err,result){
        res.send(result);
    })
}
laptopController.prototype.delete = function(req,res){
    lm.delete(req.params.id ,function(err,result){
        res.send(result);
    })
}
module.exports = laptopController;
