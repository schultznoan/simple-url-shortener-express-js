
import UrlModel from '../../models/url'
import randomstring from 'randomstring'

export default new class UrlService {
  async create ({ url, alias }: any) {
    if (!url) {
        throw new Error('Url is required')
    }

    const findedUrl = await UrlModel.find({ url })

    if (findedUrl) {
        throw new Error('Url already exist')
    }

    return await UrlModel.create({ url, alias: alias ?? randomstring.generate(5) })
  }
}