import userModel from '../../../models/userSchema'
import db_conn from '../../../helpers/db_conn';

db_conn();
export default async function totalUsers(req, res) {
    await userModel.estimatedDocumentCount()
        .then((total) => {
            res.status(200).json(total)
        }).catch((err) => {
            res.status(404).json({error:"error occured while fetching total no of users"})
        })

}