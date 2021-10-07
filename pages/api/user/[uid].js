import db_conn from '../../../helpers/db_conn';
import userModel from '../../../models/userSchema'

db_conn();
export default function question(req, res) {
    switch (req.method) {
        case "GET":
            getUser(req, res);
            break;
        case "DELETE":
            deleteUser(req, res);
            break;
    }
}

const deleteUser = async (req, res) => {
    const { uid } = req.query;
    await userModel.findByIdAndDelete(uid)
    .then((ques)=>{
        res.status(200).json(ques)
    }).catch((err)=>{
        res.status(500).json("failed to delete user")
    })
}
