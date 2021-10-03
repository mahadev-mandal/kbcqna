import mongoose from 'mongoose';

const questionsSchema = new mongoose.Schema({
    question: {
        type: String,
        requred: true
    },
    options: {
        type: Array,
        required: true,
    },
    correctOption: {
        type: String,
        requred: true,
    },
    season: {
        type: Number
    },
    episode: {
        type: Number
    },
    date: {
        type: Date,
        default: Date.now
    },
    author: {
        type: String,
        required: true,
    }
})

//const questionModel = new mongoose.model('Question', questionsSchema);

export default mongoose.models.question || mongoose.model('question', questionsSchema)