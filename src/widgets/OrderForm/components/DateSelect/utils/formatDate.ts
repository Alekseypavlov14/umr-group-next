export function formatDate(time: number) {
  const now = new Date(time)

  let day = now.getDate().toString()
  if (day.length === 1) day = '0' + day

  let month = (now.getMonth() + 1).toString()
  if (month.length === 1) month = '0' + month

  return `${now.getFullYear()}-${month}-${day}`
}