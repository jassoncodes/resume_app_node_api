import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "contact" })
export class ContactInfoModel {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar" })
  email!: string;

  @Column({ type: "varchar" })
  phone!: string;

  @Column({ type: "varchar" })
  github!: string;

  @Column({ type: "varchar" })
  linkedin!: string;
}
