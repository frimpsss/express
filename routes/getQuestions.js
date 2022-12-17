import express from 'express'
import getQuestionsController from '../controller/getQuestionsController.js'
const router = express.Router()

router.get('/getquestions',getQuestionsController)

export default router