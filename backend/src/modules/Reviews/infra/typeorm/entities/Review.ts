import { Place } from "@modules/Places/infra/typeorm/entities/Place";
import { User } from "@modules/Users/infra/typeorm/entities/User";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("reviews")
class Review {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Place, (place) => place.reviews, {
    onDelete: "CASCADE",
    eager: true,
  })
  place: Place;

  @ManyToOne(() => User, (user) => user.reviews, {
    onDelete: "CASCADE",
  })
  user: User;

  @Column()
  review: string;

  @Column()
  score: string;
}

export { Review };
