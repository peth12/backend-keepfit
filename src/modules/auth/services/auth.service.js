import UserModel from "../../users/models/user.schema.js";
const Authservice = {
    getuser: (query) => {
        return UserModel.findOne(query);
    }
    

}


export default Authservice;