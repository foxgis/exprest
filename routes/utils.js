module.exports.asyncHandler = fn => (req, res, next) => {
  Promise.resolve(fn(req, res, next))
   .catch(next)
}

module.exports.getAuthToken = req => {
  const authHeader = req.get('authorization')
  if (!authHeader) {
    throw new Error('Missing authorization header')
  }
  const [bearer, token] = authHeader.split(' ')
  if (bearer !== 'Bearer') {
    throw new Error(`Auth header is not 'Bearer {token}'`)
  }
  return token
}