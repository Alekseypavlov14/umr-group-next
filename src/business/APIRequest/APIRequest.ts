type Options = {
  method?: string,
  body?: any
}

export async function APIRequest(relativePath: string, options?: Options) {
  const path = 'https://umr-group.herokuapp.com' + relativePath

  const response = await fetch(path, {
    headers: { 'Content-Type': 'application/json' },
    ...options
  })

  const data = await response.json()
  return data
}