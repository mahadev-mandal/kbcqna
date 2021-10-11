import questionModel from '../../../models/QuestionsSchema';
import db_conn from '../../../helpers/db_conn';

db_conn();
export default async function getDataForSitemap(req, res) {
    try{
    const data = await questionModel.find({}, { date: 1 })
        res.status(200).json(data)
    }catch(err){
        console.log(err);
        res.status(404).json({error:'error occured while fetching data for sitemap'})
    }
}