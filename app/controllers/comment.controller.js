const Comment = require('../models/comments.model.js');

// Create and Save a new Note
exports.create = (req, res) => {
    // Validate request
    if(!req.body.comment) {
        return res.status(400).send({
            message: "Comment content can not be empty"
        });
    }
    const _comment_create = new Comment({
        email: req.body.email,
        name: req.body.name,
        location: req.body.location,
        comment: req.body.comment
    });

    _comment_create.save()
    .then(data => {
        res.status(200).send({status:200,data:data});
    }).catch(err => {
        res.status(500).send({
            status:500,
            message: err.message || "Some error occurred while creating the Note."
        });
    });
};

exports.findAll = (req, res) => {
    Comment.find().sort({createdAt:-1})
    .then(_coments => {
        res.status(200).send({status:200,data:_coments});
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};
