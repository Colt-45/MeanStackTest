var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var QuestionSchema = new mongoose.Schema({
    name: {
        type: String, 
        default: "",
        required: [true, "name must be atleast 2 Characters long."],
        minlength: 2,
    }, 
    question: {
        type: String, 
        default: "",
        required: [true, "question must be atleast 2 Characters long."],
        minlength: 2,
    }, 
    option1: {
        type: String, 
        default: "",
        required: [true, "option 1 must be atleast 2 Characters long."],
        minlength: 2,
    }, 
    option2: {
        type: String, 
        default: "",
        required: [true, "option 2 must be atleast 2 Characters long."],
        minlength: 2,
    }, 
    option3: {
        type: String, 
        default: "",
        required: [true, "option 3 must be atleast 2 Characters long."],
        minlength: 2,
    }, 
    option4: {
        type: String, 
        default: "",
        required: [true, "option 4 must be atleast 2 Characters long."],
        minlength: 2,
    }, 
    vote1: {
        type: Number, 
        default: 0,
    },
    vote2: {
        type: Number, 
        default: 0,
    },
    vote3: {
        type: Number, 
        default: 0,
    },
    vote4: {
        type: Number, 
        default: 0,
    },


}, {timestamps: {createdAT: "created_at", updatedAt: "updated_at"}});

let Question = mongoose.model("Question", QuestionSchema);
module.exports = Question;