import questionModel from '../../../models/QuestionsSchema';
import db_conn from '../../../helpers/db_conn';
import { quesPerPage } from '../../../helpers/showPerPage'

db_conn();
export default async function questionPerPage(req, res) {
    const { pageno } = req.query;
    await questionModel.find().skip((parseInt(pageno) - 1) * quesPerPage).limit(quesPerPage)
        .then((questions) => {
            res.status(200).json(questions)
        }).catch((err) => {
            console.log(err)
            res.status(500).json({error:"internal server Error"})
        })
}