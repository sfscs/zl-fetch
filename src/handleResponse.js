const parseResponse = (response, type) => {
  return response[type]()
    .then(body => formatOutput(response, body))
}

const formatOutput = (response, body) => {
  const headers = {}
  const returnValue = {
    body,
    headers,
    response,
    status: response.status,
    statusText: response.statusText
  }
  return response.ok
    ? Promise.resolve(returnValue)
    : Promise.reject(returnValue)
}

const handleResponse = response => {
  const type = response.headers.get('content-type')
  if (type.includes('json')) return parseResponse(response, 'json')
  if (type.includes('text')) return parseResponse(response, 'text')
  if (type.includes('image')) return parseResponse(response, 'blob')

  // default return as json since this doesnt seem to work in ie11 otherwise
  return parseResponse(response, 'json')
}

module.exports = handleResponse
