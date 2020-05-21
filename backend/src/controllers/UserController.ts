import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
  {
    name: 'Jamerson Aguiar',
    email: 'jamersonaguiar@alu.ufc.br',
  },
];

class UserController {
  async index(req: Request, res: Response) {
    return res.json(users);
  }

  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendMail({
      to: {
        name: 'Jamerson Aguiar',
        email: 'jamersonaguiar@alu.ufc.br',
      },
      message: {
        subject: 'Bem-vindo ao sistema!',
        body: 'Seja bem-vindo!',
      },
    });

    return res.json();
  }
}

export default new UserController();
