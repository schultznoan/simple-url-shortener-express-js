import {
  Router,
  Request,
  Response
} from 'express'
import UrlController from '../controllers/url'

const router = Router()

router.post('/url', UrlController.create)

export default router