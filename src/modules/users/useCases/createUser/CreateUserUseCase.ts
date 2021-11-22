import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const user = this.usersRepository.create({
      name,
      email,
    });
    if (!user) {
      throw new Error("email já está cadastrado");
    }
    return user;
  }
}

export { CreateUserUseCase };
