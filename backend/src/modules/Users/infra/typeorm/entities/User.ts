import { Review } from "@modules/Reviews/infra/typeorm/entities/Review";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

export type UserRoleType = "admin" | "user";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  avatar: string;

  @Column({
    type: "enum",
    enum: ["admin", "user"],
    default: "user",
  })
  role: UserRoleType;

  @OneToMany(() => Review, (review) => review.user, { cascade: true })
  reviews: Review[];
}

export { User };
