export interface IUserDTO {
  id: string;
  name: string;
  birthdate: Date;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

export class UserDTO implements IUserDTO {
  public id: string;
  public name: string;
  public birthdate: Date;
  public email: string;
  public createdAt: Date;
  public updatedAt: Date;

  constructor({ id, name, birthdate, email, createdAt, updatedAt }: IUserDTO) {
    this.id = id;
    this.name = name;
    this.birthdate = birthdate;
    this.email = email;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
