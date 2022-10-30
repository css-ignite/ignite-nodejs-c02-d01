import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
  admin?: boolean;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name, admin }: IRequest): User {
    const userAlreadyExists = this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new Error("Mensagem do erro");
    }

    const createdUser: User = this.usersRepository.create({
      name,
      email,
      admin,
    });

    console.log("createdUser", createdUser);

    const user = createdUser;

    return user;
  }
}

export { CreateUserUseCase };
