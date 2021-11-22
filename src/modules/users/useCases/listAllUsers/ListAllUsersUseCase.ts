import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const users = this.usersRepository.list(user_id);
    if (!users) {
      throw new Error("Usuário não é admin");
    }
    return users;
  }
}

export { ListAllUsersUseCase };
