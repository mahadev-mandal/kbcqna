import userModel from '../../../models/userSchema'
import db_conn from '../../../helpers/db_conn';

db_conn();
export default async function totalUsers(req, res) {
    await userModel.estimatedDocumentCount()
        .then((total) => {
            res.status(200).json(total)
        }).catch((err) => {
            console.log(err)
        })

}