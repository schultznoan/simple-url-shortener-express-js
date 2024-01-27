import { Types } from 'mongoose'

export interface UrlCreatePayload {
  url: string
  alias?: string
}

export interface UrlAlias {
  id: Types.ObjectId,
  url: string
  alias: string
}