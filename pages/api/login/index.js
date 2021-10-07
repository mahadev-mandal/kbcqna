import db_conn from '../../../helpers/db_conn'
import userModel from '../../../models/userSchema'
import jwt from 'jsonwebtoken';

db_conn();
export default async function login(req, res) {
    try {
        const user = await userModel.findOne({ email: req.body.email })
        if (user) {
            if (user.password === req.body.password) {
                const token = jwt.sign({_id:user._id.toString(),role:user.role,name:user.name},process.env.SECRET_KEY,{expiresIn:"1 day"})
                res.status(200).json({token})
            }
        } else {
            res.status(403).json({ errorMessage: "email or password is incorrect" })
        }
    } catch (err) {
        res.status(403).json({ errorMessage: "something went wrong" })

    }
}