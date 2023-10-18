import mongoose from "mongoose";

const ActivityTypeSchema= new mongoose.Schema({
    ActivityTypeName : {
        type: String,
        require: true
    },
    ActivityTypeImage : {
        type: String,
        require: true
    },
    ActivityTypeDesc : {
        type: String,
        require: true
    }

})

const ActivityTypModel = mongoose.model('ActivityType', ActivityTypeSchema);


export default ActivityTypModel;