import db_conn from '../../../helpers/db_conn';
import questionModel from '../../../models/QuestionsSchema'

db_conn();
export default function question(req, res) {
    console.log(req.method)
    switch (req.method) {
        case "GET":
            getQuestion(req, res);
            break;
        case "DELETE":
            deleteQuestion(req, res);
            break;
    }
}

const deleteQuestion = async (req, res) => {
    const { qid } = req.query;
    await questionModel.findByIdAndDelete(qid)
        .then((ques) => {
            res.status(200).json(ques)
        }).catch((err) => {
            res.status(500).json({error:"failed to delete"})
            console.log(err)
        })
}
const getQuestion = async (req, res) => {
    try {
        const { qid } = req.query;
        const ques = await questionModel.findById(qid)
        res.status(200).json(ques)
    }catch(err){
        res.status(404).json({error:"failed to find question"})
    }
}
