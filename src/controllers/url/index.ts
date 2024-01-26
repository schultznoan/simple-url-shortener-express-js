import UrlService from '../../services/url'
import {
    Request,
    Response
} from 'express'

export default new class UrlController {
    async create(req: Request, res: Response, next: any) {
        try {
            const createdUrl = await UrlService.create(req?.body || {})

            return res.json(createdUrl)
        } catch (error) {
            next(error)
        }
    }
    async get(req: Request, res: Response, next: any) {
        try {
            const findedUrl: string = await UrlService.get(req.params.id)

            return res.redirect(findedUrl)
        } catch (error: any) {
            next(error)
        }
    }
}