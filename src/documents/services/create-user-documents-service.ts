import { BaseService } from '@src/services/base-service';
import { IUserDocumentsDTO } from '@documents/dtos/user-documents-dto';
import { UserDocumentsMapper } from '@documents/mappers/user-documents-mapper';
import { ICreateUserDocumentsRepository } from '@documents/repositories/create-user-documents-repository';

export interface ICreateUserDocumentsService {
  execute(
    file: Express.Multer.File,
    user_id: string,
  ): Promise<IUserDocumentsDTO>;
}

export class CreateUserDocumentsService
  extends BaseService
  implements ICreateUserDocumentsService
{
  private createUserDocumentsRepository: ICreateUserDocumentsRepository;

  constructor(createUserDocumentsRepository: ICreateUserDocumentsRepository) {
    super();
    this.createUserDocumentsRepository = createUserDocumentsRepository;
  }

  public async execute(
    file: Express.Multer.File,
    user_id: string,
  ): Promise<IUserDocumentsDTO> {
    const filename = file.filename;
    const url = `/files/${filename}`;

    const createdUserDocuments =
      await this.createUserDocumentsRepository.execute({
        name: filename,
        url,
        user_id,
      });

    return UserDocumentsMapper.execute(createdUserDocuments);
  }
}
