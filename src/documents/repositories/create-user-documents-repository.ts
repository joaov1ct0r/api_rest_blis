import { UserDocuments } from 'generated/prisma';
import { PrismaProvider } from '@utils/prisma-provider';
import { ICreateUserDocumentsDTO } from '@documents/dtos/create-user-documents-dto';

export interface ICreateUserDocumentsRepository {
  execute(dto: ICreateUserDocumentsDTO): Promise<UserDocuments>;
}

export class CreateUserDocumentsRepository
  extends PrismaProvider
  implements ICreateUserDocumentsRepository
{
  public async execute(dto: ICreateUserDocumentsDTO): Promise<UserDocuments> {
    const userDocuments = await this.prisma.userDocuments.create({ data: dto });

    return userDocuments;
  }
}
