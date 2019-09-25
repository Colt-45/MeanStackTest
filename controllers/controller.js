var mongoose = require("mongoose");
var User = require("../models/question");

module.exports = {

    index: function(req, res){
        console.log("index")
        User.find({})
            .then(users => (res.json(users)))
            .catch(err => res.json(err))
    },

    getquestions: function(req, res){
        console.log("index")
        User.find({})
            .then(users => res.json(users))
            .catch(err => res.json(err))
    },
    getsearch: function(req, res){
        console.log("index", body.req.val)
        User.find({name:req.body.val})
            .then(users => res.json(users))
            .catch(
                User.find({question:req.body.val})
                    .then(users => res.json(users))
                    .catch(err => res.json(err))
            )
    },

    addquestion: function(req, res){
        console.log("add")
        console.log(req)
        User.create({name: req.body.name, question:req.body.question, option1:req.body.option1, option2:req.body.option2, option3:req.body.option3, option4:req.body.option4})
            .then(user => res.json(user))
            .catch(err => res.json(err))
    },

    removequestion: function(req, res){
        console.log("remove")
        User.remove({_id:req.params.id})
            .then(user => res.json(user))
            .catch(err => res.json(err))
    },

    details: function(req, res){
        console.log("details")
        User.findOne({_id:req.params.id})
            .then(user => res.json(user))
            .catch(err => res.json(err))
    },

    edit: function(req, res){
        console.log("Req.body", req)
        User.findById(req.params.id)
            .then(user => {
                if(req.body.name){
                    user.name = req.body.name;
                }
                user.save()
                res.json(user)
            })
            .catch(err => res.json(err))
    },
    vote1: function(req, res){
        console.log("details")
        User.findOne({_id:req.params.id})
            .then(user => {
                user.vote1+=1
                user.save()
                res.json(user)
            })
            .catch(err => res.json(err))
    },
    vote2: function(req, res){
        console.log("details")
        User.findOne({_id:req.params.id})
            .then(user => {
                user.vote2+=1
                user.save()
                res.json(user)
            })
            .catch(err => res.json(err))
    },
    vote3: function(req, res){
        console.log("details")
        User.findOne({_id:req.params.id})
            .then(user => {
                user.vote3+=1
                user.save()
                res.json(user)
            })
            .catch(err => res.json(err))
    },
    vote4: function(req, res){
        console.log("details")
        User.findOne({_id:req.params.id})
            .then(user => {
                user.vote4+=1
                user.save()
                res.json(user)
            })
            .catch(err => res.json(err))
    },
}