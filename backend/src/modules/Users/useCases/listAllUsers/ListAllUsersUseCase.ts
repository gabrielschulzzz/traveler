/* eslint-disable prettier/prettier */
import { User } from "@modules/Users/infra/typeorm/entities/User";
import { IUsersRepository } from "@modules/Users/repositories/IUsersRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListAllUsersUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) { }

  async execute(): Promise<User[]> {
    const users = await this.usersRepository.findAll()

    return users;
  }
}

export { ListAllUsersUseCase };
