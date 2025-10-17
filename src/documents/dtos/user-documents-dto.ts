export interface IUserDocumentsDTO {
  id: string;
  name: string;
  url: string;
  user_id: string;
  createdAt: Date;
  updatedAt: Date;
}

export class UserDocumentsDTO implements IUserDocumentsDTO {
  public id: string;
  public name: string;
  public url: string;
  public user_id: string;
  public createdAt: Date;
  public updatedAt: Date;

  constructor({
    id,
    name,
    url,
    user_id,
    createdAt,
    updatedAt,
  }: IUserDocumentsDTO) {
    this.id = id;
    this.name = name;
    this.url = url;
    this.user_id = user_id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
