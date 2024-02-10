import ActivityModel from './activity.schema.js'


const ActivityService = {
    create: (query) => {
        return ActivityModel.create(query);
    },
    getAll:(query = {}) => {
        return ActivityModel.find(query).sort ( { ActivityDate: -1 } )
    },
    getEmail:(query) => {
        return ActivityModel.find(query)
    },
    getOne: (id) => {
        return ActivityModel.findById({ _id: id})
    },
    updateOne: (id, query) => {
        return ActivityModel.findByIdAndUpdate({ _id:id } , {$set: query})
    },
    deleteOne: (id) => {
        return ActivityModel.deleteOne({_id: id})
    }
}

export default ActivityService

