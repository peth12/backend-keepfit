import UserService from "../services/users.service.js";

const UserController = {
  getUser: async (req, res) => {
    const user = await UserService.getAll();
    res.status(200).json(user);
  },
  getUserById: async (req, res) => {
    const id = req.params.id;
    const user = await UserService.getOne(id);
    res.status(200).json(user);
  },
  createUser: async (req, res) => {
    const {
      Userfname,
      Userlname,
      UserDateOfBirth,
      Gender,
      Weight,
      Height,
      UserEmail,
      UserPassword,
      UserRole
    } = req.body;
    const CreateUser = await UserService.create(
      {
      Userfname,
      Userlname,
      UserDateOfBirth,
      Gender,
      Weight,
      Height,
      UserEmail,
      UserPassword,
      UserRole
    }
    );
    res.status(201).json(CreateUser);
  },
  updateUser: async (req, res) => {
    const id = req.params.id;
    const {
      Userfname,
      Userlname,
      UserDateOfBirth,
      Gender,
      Weight,
      Height,
      UserEmail,
      UserPassword,
      UserRole
    } = req.body;

    const updateDataUser = await UserService.updateOne(id, {
      Userfname: Userfname,
      Userlname: Userlname,
      UserDateOfBirth: UserDateOfBirth,
      Gender: Gender,
      Weight: Weight,
      Height: Height,
      UserEmail :UserEmail,
      UserPassword :UserPassword,
      UserRole: UserRole,
    })  
    

    res.status(201).json(updateDataUser);
  },
  deleteUser: async (req, res) => {
    const id = req.params.id;
    await UserService.deleteOne(id);
    res.status(201).send("delete success");
  },
};

export default UserController;
