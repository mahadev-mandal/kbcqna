import questionModel from '../../../models/QuestionsSchema'
import db_conn from '../../../helpers/db_conn'

db_conn();
export default function question(req, res) {
    switch (req.method) {
        case "POST":
            saveQuestion(req, res);
            break;
        default:
            res.status(404).send("this page is not found")

    }
}

const saveQuestion = async (req, res) => {
    const { question, episode, season, author, correctOption, options,questionNo } = req.body;
    if (!question || !author || !correctOption) {
        res.status(422).json({ error: "Please fill all required fields" });
    } else {
        const ques = new questionModel({
            question,
            episode,
            season,
            author,
            correctOption,
            options,
            questionNo,
        })
        await ques.save()
            .then((q) => {
                res.status(200).json(q)
            }).catch((err) => {
                res.status(500).send("question not inserted into database")
            })

    }
}