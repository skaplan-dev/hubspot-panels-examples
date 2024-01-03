exports.main = (context = {}, sendResponse) => {
  const response = `This is coming from a serverless function`

  try {
    sendResponse(response)
  } catch (error) {
    sendResponse(error)
  }
}
