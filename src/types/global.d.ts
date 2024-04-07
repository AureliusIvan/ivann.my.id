// Global types
import { ResponseErrorType, ResponseTypes } from './response';

declare global {
  namespace ResponseType {
    type StdResponseTypes = ResponseTypes;
    type StdResponseErrorTypes = ResponseErrorType;
  }
}

export { }