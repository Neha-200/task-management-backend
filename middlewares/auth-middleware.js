const jwt = require("jsonwebtoken");
const User = require("../models/user-model");

const authMiddleware = async (req,res,next) => {

    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({ message: "Unauthorized HTTP, Token not provided" });
    };
    
    const jwtToken = token.replace("Bearer", "").trim();
    console.log('token form auth middleware', jwtToken);

    try {
        const isVerifird = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
        console.log(isVerifird);
 
        const userData = await User.findOne({email:isVerifird.email})
          .select({ password: 0 });
        console.log(userData);

        if (!userData) {
            return res.status(401).json({ message: "Unauthorized HTTP, User not found" });
        }

        req.user = userData;
        req.token = token;
        req.userId = userData._id;

        next();
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized HTTP, Token not provided" });
    }
   
}

module.exports = authMiddleware;