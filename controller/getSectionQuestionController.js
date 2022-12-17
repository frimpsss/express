import questions from "../db/questions.js"
export default (req, res) => {
    const { section } = req.params
   try{
    res.send({
        status: true, 
        message: `questions in ${section} section retrived`, 
        data: questions.filter((itm) => {
            return itm.category.toLowerCase() === section.toLowerCase()
        })
    })
   }
   catch(error){
    res.send({
        status: true, 
        message: `Error message: ${error}`, 
    })
   }
}