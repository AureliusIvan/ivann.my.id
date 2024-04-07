import { LogClass } from './decorator'

type networkstatus = 200 | 201 | 400 | 401 | 404 | 500



@LogClass
interface ResponseTypes {
  status: networkstatus
  message: string
  data?: any
}


@LogClass
interface ResponseErrorType {
  status: networkstatus
  message: string
  error?: any
}

export { ResponseTypes, ResponseErrorType }