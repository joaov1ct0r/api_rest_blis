export interface IUserDTO {
  id: string;
  name: string;
  birthdate: string;
  email: string;
  created_at: string;
  updated_at: string;
}

export class UserDTO implements IUserDTO {
  public id: string;
  public name: string;
  public birthdate: string;
  public email: string;
  public created_at: string;
  public updated_at: string;

  constructor({
    id,
    name,
    birthdate,
    email,
    created_at,
    updated_at,
  }: IUserDTO) {
    this.id = id;
    this.name = name;
    this.birthdate = birthdate;
    this.email = email;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}
