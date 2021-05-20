/* eslint-disable prettier/prettier */
import { IUpdateUserDTO } from "@modules/Users/dtos/IUpdateUserDTO";
import { IUsersRepository } from "@modules/Users/repositories/IUsersRepository";
import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";

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

    await this.usersRepository.update({ avatar, id, name, password: passwordHash, email })
  }
}

export { UpdateUserUseCase };
