
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateTransferUseCase } from './CreateTransferUSeCase';

export class CreateTransferController {
  async execute(request: Request, response: Response) {
    const { receiverUserID } = request.params;
    const { id: senderUserID } = request.user;
    const {amount, description} = request.body;

    const createTransferUseCase = container.resolve(CreateTransferUseCase);

    await createTransferUseCase.execute({
      senderUserID,
      receiverUserID,
      amount,
      description
    });

    return response.status(201).send();
  }
}
