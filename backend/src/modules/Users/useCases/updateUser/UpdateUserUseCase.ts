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

    let avatarTrim = avatar;

    if (avatar.startsWith("1") && !user.avatar) {
      avatarTrim = avatar.substring(1);
    } if (avatar.startsWith("1") && user.avatar) {
      avatarTrim = avatar.substring(1);
      await deleteFile(`./tmp/avatar/${user.avatar.substring(29)}`)
    }

    await this.usersRepository.update({
      avatar: avatarTrim,
      id,
      name,
      password: passwordHash,
      email
    })
  }
}

export { UpdateUserUseCase };
