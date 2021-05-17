import { City } from "@modules/Cities/infra/typeorm/entities/City";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("places")
class Place {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  photo: string;

  @Column({ nullable: true })
  telefone: string;

  @Column()
  category: string;

  @Column()
  cep: string;

  @Column()
  rua: string;

  @Column()
  bairro: string;

  @Column()
  numero: string;

  @ManyToOne(() => City, (city) => city.places, { onDelete: "CASCADE" })
  city: City;

  @Column({ nullable: true })
  domingoOpen: boolean;

  @Column({ nullable: true })
  domingoFrom: string;

  @Column({ nullable: true })
  domingoUntil: string;

  @Column({ nullable: true })
  segundaOpen: boolean;

  @Column({ nullable: true })
  segundaFrom: string;

  @Column({ nullable: true })
  segundaUntil: string;

  @Column({ nullable: true })
  tercaOpen: boolean;

  @Column({ nullable: true })
  tercaFrom: string;

  @Column({ nullable: true })
  tercaUntil: string;

  @Column({ nullable: true })
  quartaOpen: boolean;

  @Column({ nullable: true })
  quartaFrom: string;

  @Column({ nullable: true })
  quartaUntil: string;

  @Column({ nullable: true })
  quintaOpen: boolean;

  @Column({ nullable: true })
  quintaFrom: string;

  @Column({ nullable: true })
  quintaUntil: string;

  @Column({ nullable: true })
  sextaOpen: boolean;

  @Column({ nullable: true })
  sextaFrom: string;

  @Column({ nullable: true })
  sextaUntil: string;

  @Column({ nullable: true })
  sabadoOpen: boolean;

  @Column({ nullable: true })
  sabadoFrom: string;

  @Column({ nullable: true })
  sabadoUntil: string;
}

export { Place };
