const generateUniqueFilename = (originalName: string) => {
  const extension = originalName.split('.').pop();
  const filenameWithoutExtension = originalName.split('.')[0];  // Get filename without extension
  const timestamp = Date.now();  // Use a timestamp for uniqueness
  return `${filenameWithoutExtension}-${timestamp}.${extension}`;
}


const addSlashDirName = (originalName: string, dir: string) => {
  return dir + "/" +  originalName
}

export { generateUniqueFilename, addSlashDirName }