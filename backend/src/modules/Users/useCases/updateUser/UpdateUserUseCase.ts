/* eslint-disable prettier/prettier */
import { IUpdateUserDTO } from "@modules/Users/dtos/IUpdateUserDTO";
import { User } from "@modules/Users/infra/typeorm/entities/User";
import { IUsersRepository } from "@modules/Users/repositories/IUsersRepository";
import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";
import { deleteFile } from "utils/file";

@injectable()
class UpdateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) { }

  async execute({
    avatar,
    email,
    password,
    name,
    id
  }: IUpdateUserDTO): Promise<void> {
    const passwordHash = await hash(password, 8);

    const user = await this.usersRepository.findOne(id);

    if (user.avatar) {
      await deleteFile(`./tmp/avatar/${user.avatar}`)
    }

    await this.usersRepository.update({ avatar, id, name, password: passwordHash, email })
  }
}

export { UpdateUserUseCase };
