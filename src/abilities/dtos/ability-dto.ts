export interface IAbilityDTO {
  id: string;
  name: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export class AbilityDTO implements IAbilityDTO {
  public id: string;
  public name: string;
  public active: boolean;
  public createdAt: Date;
  public updatedAt: Date;

  constructor({ id, name, active, createdAt, updatedAt }: IAbilityDTO) {
    this.id = id;
    this.name = name;
    this.active = active;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
