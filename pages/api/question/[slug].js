import db_conn from '../../../helpers/db_conn';
import questionModel from '../../../models/QuestionsSchema'

db_conn();
export default function question(req, res) {
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
    const { slug } = req.query;
    await questionModel.findByIdAndDelete(slug)
        .then((ques) => {
            res.status(200).json(ques)
        }).catch((err) => {
            res.status(500).json({error:"failed to delete"})
        })
}
const getQuestion = async (req, res) => {
    try {
        const { slug } = req.query;
        const ques = await questionModel.findOne({slug})
        res.status(200).json(ques)
    }catch(err){
        res.status(404).json({errorMessage:"failed to find question"})
    }
}
