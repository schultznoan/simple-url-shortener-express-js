import { Router } from 'express'
import UrlController from '../controllers/url'

const router = Router()

router.post('/convert', UrlController.create)
router.get('/:id', UrlController.get)

export default router