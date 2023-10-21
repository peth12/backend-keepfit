import Authservice from "../services/auth.service.js";
import UserModel from "../../users/models/user.schema.js";
import bcrypt from 'bcrypt'
import Jwt from 'jsonwebtoken'

const AuthController = {
  login: async (req, res) => {
    try {
      const { UserEmail, UserPassword } = req.body;
      const user = await Authservice.getuser({ UserEmail: UserEmail });
      console.log(req.body);
      console.log(user);

      if (user) {
        // check password
        
        const passwordIsTrue = await bcrypt.compareSync(
          UserPassword,
          user.UserPassword
        );

        console.log(passwordIsTrue);
        if (!passwordIsTrue) {
          return res.status(400).send("Password invalid!!");
        }

        // create payload
        const payload = {
          user: {
            UserEmail: user.UserEmail,
            UserRole: user.UserRole,
          },
        };

        // generate token
        Jwt.sign(payload, "JwtSecret", { expiresIn: 3600 }, (err, token) => {
          if (err) throw err;
          res.json({ message: "login success", token, payload });
        });
      } else {
        return res.status(400).send("User Not found!!");
      }
    } catch (err) {
      console.error(err);
      res.status(500).send("Server Error");
    }
  },
  register: async (req, res) => {
    try {
      // check user
      const {
        Userfname,
        Userlname,
        UserDateOfBirth,
        Gender,
        Weight,
        Height,
        UserEmail,
        UserPassword,
        UserRole,
        UserImage
      } = req.body;

      let user = await Authservice.getuser({ UserEmail: UserEmail });

      if (user) {
        return res.status(404).send("user already exists");
      }

      const salt = await bcrypt.genSalt(12);

      user = new UserModel({
        Userfname,
        Userlname,
        UserDateOfBirth,
        Gender,
        Weight,
        Height,
        UserEmail,
        UserPassword,
        UserRole,
        UserImage
      });

      //encrypt
      user.UserPassword = await bcrypt.hash(UserPassword, salt);

      await user.save();

      res.status(200).send("Register success");
    } catch (error) {
      console.error(error);
      res.status(500).send("Server error");
    }
  },
};

export default AuthController;
