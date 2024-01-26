
import UrlModel from '../../models/url'
import randomstring from 'randomstring'
import ApiError from '../../exceptions/error/index'

export default new class UrlService {
  async create ({ url, alias }: any) {
    if (!url) {
      throw new Error('Url is required')
    }

    const findedUrl = await UrlModel.findOne({ url })

    if (findedUrl) {
      throw new Error('Url already exist')
    }
    
    const createdUrl = await UrlModel.create({ url, alias: alias ?? randomstring.generate(5) })

    return {
      id: createdUrl._id,
      alias: createdUrl.alias,
      url: createdUrl.url
    }
  }
  async get (alias: string): Promise<string> {
    if (!alias) {
      throw ApiError.BadRequest('хуесос!', { alias: 'required' })
    }

    const findedUrl = await UrlModel.findOne({ alias })

    if (!findedUrl) {
      throw ApiError.BadRequest('хуесос!', { alias: 'required' })
    }

    return findedUrl.url
  }
}