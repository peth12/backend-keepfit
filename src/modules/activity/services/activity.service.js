import ActivityModel from "../models/activity.schema.js";


const ActivityService = {
    create: (query) => {
        return ActivityModel.create(query);
    },
    getAll:(query = {}) => {
        return ActivityModel.find(query)
    },
    getOne: (id, query) => {
        return ActivityModel.findById({ _id: id}, {$set: query})
    },
    updateOne: (id, query) => {
        return ActivityModel.findByIdAndUpdate({ _id:id } , {$set: query})
    },
    deleteOne: (id) => {
        return ActivityModel.findOneAndDelete({_id: id})
    }
}

export default ActivityService