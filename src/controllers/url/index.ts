import UrlService from '../../services/url'
import {
  Request,
  Response,
  NextFunction
} from 'express'

export default new class UrlController {
    async create(req: Request, res: Response, next: NextFunction) {
        try {
            return res.json(await UrlService.create(req.body || {}))
        } catch (error) {
            next(error)
        }
    }
    async get(req: Request, res: Response, next: NextFunction) {
        try {
            return res.redirect(await UrlService.get(req.params.id))
        } catch (error) {
            next(error)
        }
    }
}