import { City } from "@modules/Cities/infra/typeorm/entities/City";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("places")
class Place {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @ManyToOne((type) => City, (places) => Place)
  city: City;

  @Column()
  photo: string;

  @Column()
  category: string;

  @Column({
    nullable: true,
  })
  domingo: boolean;

  @Column({
    nullable: true,
  })
  segunda: boolean;

  @Column({
    nullable: true,
  })
  terca: boolean;

  @Column({
    nullable: true,
  })
  quarta: boolean;

  @Column({
    nullable: true,
  })
  quinta: boolean;

  @Column({
    nullable: true,
  })
  sexta: boolean;

  @Column({
    nullable: true,
  })
  sabado: boolean;

  @Column()
  cep: string;

  @Column()
  rua: string;

  @Column()
  bairro: string;

  @Column()
  numero: string;
}

export { Place };
