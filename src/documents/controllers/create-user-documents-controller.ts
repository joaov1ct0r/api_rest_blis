import { Request, Response } from 'express';
import { BaseController } from '@src/controllers/base-controller';
import { ICreateUserDocumentsService } from '@documents/services/create-user-documents-service';

export class CreateUserDocumentsController extends BaseController {
  private createUserDocumentsService: ICreateUserDocumentsService;

  constructor(createUserDocumentsService: ICreateUserDocumentsService) {
    super();
    this.createUserDocumentsService = createUserDocumentsService;
  }

  public async execute(req: Request, res: Response) {
    const file = req.file;
    const userId = req.userId;

    const createdUserDocuments = await this.createUserDocumentsService.execute(
      file!,
      userId!,
    );

    return res.status(201).json({
      status: 201,
      message: 'Documento armazenado com sucesso!',
      resource: createdUserDocuments,
    });
  }
}
