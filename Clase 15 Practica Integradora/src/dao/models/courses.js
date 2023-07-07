import mongoose from "mongoose";

const coursesCollection='courses'

const coursesSchema= mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true
    },
    teacher:{
        type:String,
        required: true
    },
    students:{
        type:Array,
        default:[]
    }
})

const coursesModel =mongoose.model(coursesCollection,coursesSchema)
export default coursesModel;

