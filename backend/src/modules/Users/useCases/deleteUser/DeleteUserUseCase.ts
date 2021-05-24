/* eslint-disable prettier/prettier */
import { IUsersRepository } from "@modules/Users/repositories/IUsersRepository";
import { inject, injectable } from "tsyringe";
import { deleteFile } from "utils/file";

@injectable()
class DeleteUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) { }

  async execute(id: string): Promise<void> {
    const user = await this.usersRepository.findOne(id);

    let avatartrimmed;

    if (user.avatar) {
      avatartrimmed = user.avatar.substring(29);
    }

    if (user.avatar) {
      await deleteFile(`./tmp/avatar/${avatartrimmed}`)
    }

    await this.usersRepository.delete(id)
  }
}

export { DeleteUserUseCase };
