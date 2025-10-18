import { UsersAbilities } from 'generated/prisma';

export interface IUsersAbilitiesDTO {
  user_id: string;
  ability_id: string;
  years_experience: number;
  createdAt: Date;
  updatedAt: Date;
}

export class UsersAbilitiesDTO {
  public user_id: string;
  public ability_id: string;
  public years_experience: number;
  public createdAt: Date;
  public updatedAt: Date;

  constructor({
    user_id,
    ability_id,
    years_experience,
    createdAt,
    updatedAt,
  }: UsersAbilities) {
    this.user_id = user_id;
    this.ability_id = ability_id;
    this.years_experience = years_experience;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
