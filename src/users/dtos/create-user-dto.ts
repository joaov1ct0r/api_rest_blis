export interface ICreateUserDTO {
  name: string;
  birthdate: string;
  email: string;
  password: string;
}

export class CreateUserDTO {
  public name: string;
  public birthdate: string;
  public email: string;
  public password: string;

  constructor({ name, birthdate, email, password }: ICreateUserDTO) {
    this.name = name;
    this.birthdate = String(birthdate);
    this.email = email;
    this.password = password;
  }
}
