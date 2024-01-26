import ApiError from '../../exceptions/error/index'

export default function (err: any, req: any, res: any, next: any) {
    if (err instanceof ApiError) {
        return res
          .status(err.status)
          .json({
            message: err.message,
            errors: err.errors
          })
    }
    return res
      .status(500)
      .json({ message: 'Произошла ошибка сервера' })

};