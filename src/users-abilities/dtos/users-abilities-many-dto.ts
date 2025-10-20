import { IUsersAbilitiesDTO } from '@users-abilities/dtos/users-abilities-dto';
import { IUserDTO } from '@users/dtos/user-dto';
import { IAbilityDTO } from '@abilities/dtos/ability-dto';

export interface IUsersAbilitiesManyDTO extends IUsersAbilitiesDTO {
  user: IUserDTO;
  ability: IAbilityDTO;
}

export class UsersAbilitiesManyDTO implements IUsersAbilitiesManyDTO {
  public id: string;
  public user_id: string;
  public ability_id: string;
  public years_experience: number;
  public createdAt: Date;
  public updatedAt: Date;

  public user: IUserDTO;
  public ability: IAbilityDTO;

  constructor({
    id,
    user_id,
    ability_id,
    years_experience,
    createdAt,
    updatedAt,
    user,
    ability,
  }: IUsersAbilitiesManyDTO) {
    this.id = id;
    this.user_id = user_id;
    this.ability_id = ability_id;
    this.years_experience = years_experience;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.user = user;
    this.ability = ability;
  }
}
