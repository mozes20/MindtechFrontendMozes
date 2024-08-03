export class ResponseDto {
  message: string;
  data: any;

  constructor(message: string, data: any, error?: any) {
    this.message = message;
    this.data = data;
  }
}
