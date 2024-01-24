import UrlService from '../../services/url'
import {
    Request,
    Response
} from 'express'

export default new class UrlController {
    async create (req: Request, res: Response) {
        try {
            const createdUrl = await UrlService.create(req?.body || {})

            return res.json(createdUrl)
        } catch ({ message }: any) {
            res.status(500).json({ message })
        }
    }
}