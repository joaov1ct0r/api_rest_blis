export interface ICreateJWTTokenDTO {
  token: string;
  payload: { userId: string };
}
