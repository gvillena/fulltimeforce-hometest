export type MultipleErrors = [
  {
    constraints: string[];
  }
];

export interface ValidationError {
  errors?: MultipleErrors;
  success: boolean;
  statusCode: number;
  message: string;
}
