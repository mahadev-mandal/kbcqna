import userModel from '../../../models/userSchema';
import db_conn from '../../../helpers/db_conn'
import { userPerPage } from '../../../helpers/showPerPage'

db_conn();
export default async function getUsers(req, res) {
    const { userpageno } = req.query;
    await userModel.find().skip(parseInt((userpageno) - 1) * userPerPage).limit(userPerPage)
    .then((users)=>{
        res.status(200).send(users)
    }).catch((err)=>{
        res.status(404).send("error occured while fetching users")
        console.log(err);
    })
}
