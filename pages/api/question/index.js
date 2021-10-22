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
    var { question, episode, season, author, correctOption, options, questionNo, keywords } = req.body;

    let slug = keywords.replace(/\s+/g, "").toLowerCase();
    if (season && episode) {
        if (questionNo) {
            slug = `${slug.replace(/,/g, "-")}-s${season}-e${episode}-n${questionNo}`
        } else {
            slug = `${slug.replace(/,/g, "-")}-s${season}-e${episode}`
        }
    } else {
        slug = slug.replace(/,/g, "-");
    }

    if (!question || !author || !correctOption) {
        res.status(422).json({ error: "Please fill all required fields" });
    } else {
        const ques = new questionModel({
            question,
            episode,
            season,
            author,
            keywords,
            correctOption,
            options,
            questionNo,
            slug,
        })
        await ques.save()
            .then((q) => {
                res.status(200).json(q)
            }).catch((err) => {
                if (err.keyPattern.keywords === 1) {
                    res.status(403).json({ errorMessage: "same keywords already present" })
                }else{
                    res.status(500).json({ errorMessage: "something went wrong" })
                }
                console.log(err)
            })

    }
}