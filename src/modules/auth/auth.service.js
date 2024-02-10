import UserModel from "../users/user.schema.js";
const Authservice = {
    getuser: (query) => {
        return UserModel.findOne(query);
    }
    

}


export default Authservice;