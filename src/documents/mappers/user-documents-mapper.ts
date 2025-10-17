import { UserDocuments } from 'generated/prisma';
import {
  IUserDocumentsDTO,
  UserDocumentsDTO,
} from '@documents/dtos/user-documents-dto';

export class UserDocumentsMapper {
  static execute({
    id,
    name,
    url,
    user_id,
    createdAt,
    updatedAt,
  }: UserDocuments): IUserDocumentsDTO {
    return new UserDocumentsDTO({
      id,
      name,
      url,
      user_id,
      createdAt,
      updatedAt,
    });
  }
}
