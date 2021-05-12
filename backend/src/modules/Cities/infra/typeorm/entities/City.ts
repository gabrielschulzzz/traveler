import { Place } from "@modules/Places/infra/typeorm/entities/Place";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("cities")
class City {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  fact: string;

  @OneToMany((type) => Place, (city) => City)
  places: Place[];
}

export { City };
