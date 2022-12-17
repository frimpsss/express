import questions from '../db/questions.js'

export default (req, res) => {
    res.send({
        status: true, 
        message: "list of questions retrived", 
        data: questions
    })
}