import ActivityTypModel from "../model/activityTypeModel.js";


const ActivityTypeService = {
    create: (query) => {
        return ActivityTypModel.create(query);
    },
    getAll:(query = {}) => {
        return ActivityTypModel.find(query)
    },
    getOne: (id) => {
        return ActivityTypModel.findById({ _id: id})
    },
    updateOne: (id, query) => {
        return ActivityTypModel.findByIdAndUpdate({ _id: id } , {$set: query})
    },
    deleteOne: (id) => {
        return ActivityTypModel.findOneAndDelete({_id: id})
    },
    findOne : (query) => {
        return ActivityTypModel.findOne(query)
    }

    
}

export default ActivityTypeService