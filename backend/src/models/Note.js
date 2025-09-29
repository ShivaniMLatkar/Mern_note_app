import mongoose from "mongoose";

// 1- You need to create a schema
// 2- You would create a model based off of that schema

const noteschema = new mongoose.Schema({
    title : {
        type: String ,
        required : true,
    },
    content : {
        type: String,
        required: true,
    },
},
{timestamp: true} //createdAt, updatedAt
);

const Note = mongoose.model("Note", noteschema)

export default Note