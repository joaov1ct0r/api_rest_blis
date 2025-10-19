import { BaseService } from '@src/services/base-service';
import { IDeleteUsersAbilitiesByIdRepository } from '@users-abilities/repositories/delete-users-abilities-by-id-repository';
import { IFindUsersAbilitiesByIdRepository } from '@users-abilities/repositories/find-users-abilities-by-id-repository';

export interface IDeleteUsersAbilitiesService {
  execute(ids: string[], user_id: string): Promise<void>;
}

export class DeleteUsersAbilitiesService
  extends BaseService
  implements IDeleteUsersAbilitiesService
{
  private findUsersAbilitiesByIdRepository: IFindUsersAbilitiesByIdRepository;
  private deleteUsersAbilitiesByIdRepository: IDeleteUsersAbilitiesByIdRepository;

  constructor(
    findUsersAbilitiesByIdRepository: IFindUsersAbilitiesByIdRepository,
    deleteUsersAbilitiesByIdRepository: IDeleteUsersAbilitiesByIdRepository,
  ) {
    super();
    this.findUsersAbilitiesByIdRepository = findUsersAbilitiesByIdRepository;
    this.deleteUsersAbilitiesByIdRepository =
      deleteUsersAbilitiesByIdRepository;
  }

  public async execute(ids: string[], user_id: string): Promise<void> {
    for (const id of ids) {
      const usersAbilities =
        await this.findUsersAbilitiesByIdRepository.execute(id);

      const usersAbilitiesIsNotRegistered = usersAbilities === null;

      if (usersAbilitiesIsNotRegistered) {
        throw this.badRequest('Habilidade não encontrada!');
      }

      const usersAbilitiesIsNotInUser = usersAbilities.user_id !== user_id;

      if (usersAbilitiesIsNotInUser) {
        throw this.badRequest('Habilidade não vínculada ao usuário!');
      }

      await this.deleteUsersAbilitiesByIdRepository.execute(id);
    }
  }
}
