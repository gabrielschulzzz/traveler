/* eslint-disable prettier/prettier */
import { User } from "@modules/Users/infra/typeorm/entities/User";
import { IUsersRepository } from "@modules/Users/repositories/IUsersRepository";
import { hash } from 'bcryptjs';
import { inject, injectable } from "tsyringe";

interface IRequest {
  name: string;
  avatar: string;
  email: string;
  password: string;
}

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) { }

  async execute({
    name,
    avatar,
    email,
    password
  }: IRequest): Promise<User> {
    const userAlreadyCreated = await this.usersRepository.findByEmail(email)

    if (userAlreadyCreated) {
      throw new Error("User already exists")
    }

    const passwordHash = await hash(password, 8);

    const user = await this.usersRepository.create({
      name,
      avatar,
      email,
      password: passwordHash
    })

    return user;
  }

}

export { CreateUserUseCase };
