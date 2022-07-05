type Options = {
  method: string,
  body: any
}

export async function APIRequest(relativePath: string, options: Options) {
  const path = 'https://umr-group.herokuapp.com' + relativePath

  console.log(path)

  const response = await fetch(path, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: options.method,
    body: JSON.stringify(options.body)
  })

  const data = await response.json()
  return data
}