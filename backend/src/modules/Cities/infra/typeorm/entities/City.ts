import { Place } from "@modules/Places/infra/typeorm/entities/Place";
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("cities")
class City {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  photo: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @OneToOne(() => Place, { eager: true })
  @JoinColumn()
  highlight: Place;

  @Column()
  fact: string;

  @OneToMany(() => Place, (place) => place.city, {
    cascade: true,
  })
  places: Place[];
}

export { City };
