import { ICreateUserDTO } from "@modules/Users/dtos/ICreateUserDTO";
import { IUpdateUserDTO } from "@modules/Users/dtos/IUpdateUserDTO";
import { IUsersRepository } from "@modules/Users/repositories/IUsersRepository";
import { getRepository, Repository } from "typeorm";

import { AppError } from "@shared/errors/AppError";

import { User } from "../entities/User";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({
    name,
    avatar,
    email,
    password,
  }: ICreateUserDTO): Promise<User> {
    const user = this.repository.create({
      name,
      avatar,
      email,
      password,
    });

    await this.repository.save(user);

    return user;
  }

  async findAll(): Promise<User[]> {
    const users = await this.repository.find();

    return users;
  }

  async findOne(id: string): Promise<User> {
    // const user = await this.repository.findOne(
    //   { id },
    //   { relations: ["reviews"] }
    // );

    const user = await this.repository
      .createQueryBuilder("user")
      .leftJoinAndSelect("user.reviews", "review")
      .where("user.id = :id", { id })
      .leftJoinAndSelect("review.place", "place")
      .select(["user", "user.role", "review", "place.name", "place.photo"])
      .getOne();

    if (!user) {
      throw new AppError("User not found");
    }

    return user;
  }

  async findByEmail(email: string): Promise<User | undefined> {
    // const user = await this.repository.findOne({ email });
    const user = await this.repository
      .createQueryBuilder("user")
      .where("user.email = :email", { email })
      .select(["user.email", "user.password", "user.id", "user.name"])
      .getOne();

    return user;
  }

  async update({
    id,
    password,
    email,
    avatar,
    name,
  }: IUpdateUserDTO): Promise<void> {
    await this.repository
      .createQueryBuilder()
      .update(User)
      .set({ password, email, avatar, name })
      .where("id = :id", { id })
      .execute();
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}

export { UsersRepository };
