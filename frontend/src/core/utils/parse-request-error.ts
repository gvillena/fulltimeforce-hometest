import { AxiosError } from "axios";
import { ValidationError } from "../interfaces/state";

export const parseRequestError = (err: unknown): string => {
  const error: AxiosError<ValidationError> = err as AxiosError<ValidationError>;

  if (!error.response) throw error;

  const responseData: ValidationError = error.response.data;

  throw responseData.message;
};
