import db_conn from '../../../helpers/db_conn'
import questionModel from '../../../models/QuestionsSchema';

db_conn();
export default async function populars(req, res) {
    try {
        const data = await questionModel.find({}, { question: 1, slug: 1 }).limit(8).sort({ date: -1 });
        res.status(200).json(data)
    } catch (err) {
        res.status(404).json({ error: "Questions not found " })
    }
}