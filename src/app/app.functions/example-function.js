exports.main = (context = {}) => {
  const response = `This is coming from a serverless function`

  try {
    return response
  } catch (error) {
    return error
  }
}
