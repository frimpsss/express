import express from 'express'
import getSectionQuestionController from '../controller/getSectionQuestionController.js'
const router = express.Router()

router.get('/getquestions/:section', getSectionQuestionController)

export default router