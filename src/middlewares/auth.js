import Jwt  from "jsonwebtoken";


const auth = (req, res, next) => {
    try {
        const token = req.headers["authtoken"] ;

        if(!token){
            return res.status(401).send('No Token, authorization deneied')
        }

        //  if token 
        const decoded = Jwt.verify(token, "JwtSecret")


        console.log("middleware",decoded);
        req.user = decoded.user
        next()

    }catch(err){
        console.error(err);
        return res.status(401).send('Token Invalid!!')
    }
}


export default auth