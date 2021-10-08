module.exports = class ApiError extends Error {
  status
  errors

  constructor(status, message, errors = []) {
    super(message)
    this.status = status
    this.errors = errors
  }

  static UnauthorizedError() {
    return new ApiError(401, 'Пользователь не авторизован')
  }

  static UnauthorizedAdminError() {
    return new ApiError(401, 'Пользователь не авторизован (нет прав)')
  }

  static BadRequest(message, errors = []) {
    return new ApiError(400, message, errors)
  }
}
