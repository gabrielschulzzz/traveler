/* eslint-disable prettier/prettier */
import { User } from "@modules/Users/infra/typeorm/entities/User";
import { IUsersRepository } from "@modules/Users/repositories/IUsersRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListSingleUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) { }

  async execute(id: string): Promise<User> {
    const user = this.usersRepository.findOne(id)

    return user;
  }
}

export { ListSingleUserUseCase };
