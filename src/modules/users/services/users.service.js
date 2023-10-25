import UserModel from "../models/user.schema.js";


const UserService = {
    create: (query) => {
        return UserModel.create(query);
    },
    getAll:(query = {}) => {
        return UserModel.find(query);
    },
    getOne: (id) => {
        return UserModel.findById({ _id: id});
    },
    updateOne: (id, query) => {
        return UserModel.findByIdAndUpdate({ _id: id } , query);
    },
    deleteOne: (id) => {
        return UserModel.findOneAndDelete({_id: id});
    },
    getEmail: (query) => {
        return UserModel.findOne({UserEmail: query});
    }
}

export default UserService;