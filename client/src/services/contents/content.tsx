const getContents = async () => {
  const response = await fetch(`http://localhost:3000/api/content/get`)
  const data = await response.json()
  return data
}

export { getContents }