const mongoose = require('mongoose');

var Comments = mongoose.model("Comments");
var Cakes = mongoose.model("Cakes");

module.exports = {
    index: (req, res) => {
        Cakes.find({}, (err, data) =>{
            if (err) {
                console.log (err);
            }
            else {
                res.json(data);
            };
        });
    },

    create: (req, res) => {
        Cakes.create({
            name : req.body.name,
            url: req.body.url,
        },
        (err) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log("created", req.body.name);
            };
        });
    },


    comment: (req, res) => {
        Comments.create({
            rate: req.body.rate,
            comment: req.body.comment
        },
        (err, data) =>{
            if (err) {
                res.json(err);
            }
            else {
                Cakes.findOneAndUpdate({_id: req.params.id}, {$push: {comments: data}}, (err, data) => {
                    if (err) {
                        console.log (err);
                    }
                    else {
                        console.log("commented", data);
                    };
                });
            };
        });
    },

    update: (req, res) => {
        Cakes.updateOne({name: req.body.name}, (err, data) => {
            if (err){
                res.json(err);
            }
            else {
                data.name = req.body.name;
                data.url = req.body.url;
            };
        });
    },

    delete: (req, res) => {
        Cakes.deleteOne({_id: req.params.id}, (err) =>{
            if (err) {
                res.json(err);
            }
            else {
                console.log("delete", req.params.id);
            };
        });
    }
};