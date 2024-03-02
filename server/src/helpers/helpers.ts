const FormatToRupiah = (number: number) => {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(number);
}

const ResponseFormat = (status: number, message: string, data: any = "") => {
  if (data) {
    return {
      status,
      message,
      data
    }
  }
  return {
    status,
    message
  }
}



export { FormatToRupiah, ResponseFormat };