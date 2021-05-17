/* eslint-disable prettier/prettier */
import { IUsersRepository } from "@modules/Users/repositories/IUsersRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class DeleteUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) { }

  async execute(id: string): Promise<void> {
    await this.usersRepository.delete(id)
  }
}

export { DeleteUserUseCase };
