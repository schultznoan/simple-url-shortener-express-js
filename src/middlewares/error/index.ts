import ApiError from '../../exceptions/error/index'

export default function (error: any, _req: any, res: any, _next: any) {
  const { status, message, errors } = error

  if (error instanceof ApiError) {
    return res
      .status(status)
      .json({ message, errors })
  }

  return res
    .status(500)
    .json({ message: 'Произошла ошибка сервера', errors: {} })

}