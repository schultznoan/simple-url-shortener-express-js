
import UrlModel from '../../models/url'
import randomstring from 'randomstring'
import ApiError from '../../exceptions/error/index'
import { UrlCreatePayload } from './interface'

export default new class UrlService {
  async create ({ url, alias }: UrlCreatePayload) {
    if (!url) {
      throw ApiError.BadRequest('Некорректные данные', { url: 'Обязательное поле' })
    }

    const findedAlias = await UrlModel.findOne({ alias })

    if (findedAlias) {
      throw ApiError.BadRequest('Данное сокращение уже используется')
    }
    
    return await UrlModel.create({ url, alias: alias ?? randomstring.generate(5) })
  }
  async get (alias: string) {
    if (!alias) {
      throw ApiError.BadRequest('Некорректные данные', { alias: 'Обязательное поле' })
    }

    const findedUrl = await UrlModel.findOne({ alias })

    if (!findedUrl) {
      throw ApiError.BadRequest('Страница не найдена')
    }

    return findedUrl
  }
}