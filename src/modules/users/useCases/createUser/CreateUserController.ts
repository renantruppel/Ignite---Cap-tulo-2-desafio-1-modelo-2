import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, email } = request.body;
    try {
      const user = this.createUserUseCase.execute({
        email,
        name,
      });
      return response.status(201).json({
        name: user.name,
        email: user.email,
        admin: user.admin,
      });
    } catch (e) {
      return response.status(400).json({ error: e });
    }
  }
}

export { CreateUserController };
