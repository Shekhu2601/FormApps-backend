const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require("../Models/Users");


const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await UserModel.findOne({ email });
        if (user) {
            return res.status(409)
                .json({ message: 'User is already exist, you can login', success: false });
        }
        const userModel = new UserModel({ name, email,password });
        userModel.password = await bcrypt.hash(password, 10);
        await userModel.save();
        res.status(201)
            .json({
                message: "Signup successfully",
                success: true
            })
    } catch (err) {
        res.status(500)
            .json({
                message: "Internal server errror",
                success: false
            })
            console.log(err)
    }
}


const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });
        const errorMsg = 'Auth failed email or password is wrong';
        if (!user) {
            return res.status(403)
                .json({ message: errorMsg, success: false });
        }
        const isPassEqual = await bcrypt.compare(password, user.password);
        if (!isPassEqual) {
            return res.status(403)
                .json({ message: errorMsg, success: false });
        }
        const payload ={id:user._id}
        const jwtToken = jwt.sign(payload,
            { email: user.email, id: user._id },
            "shekhu",
           
        )

        res.status(201)
            .json({
                message: "Login Success",
                success: true,
                jwtToken,
                email,
                name: user.name,
                id:user._id
            })
    } catch (err) {
        res.status(500)
        
            .json({
                message: "Internal server errror",
                success: false
            })
            console.log(err)
    }
}

module.exports = {
    signup,
    login
}