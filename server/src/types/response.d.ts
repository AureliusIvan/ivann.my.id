interface ResponseTypes {
  status : number
  message: string
  data?: any
}


interface ResponseErrorType {
  status: number
  message: string
  error?: any
}

export {ResponseTypes, ResponseErrorType}