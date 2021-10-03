import questionModel from '../../../models/QuestionsSchema'
import db_conn from '../../../helpers/db_conn';

db_conn();
export default async function totalQuestions(req, res) {
    await questionModel.estimatedDocumentCount()
        .then((total) => {
            res.status(200).json(total)
        }).catch((err) => {
            console.log(err)
        })

}