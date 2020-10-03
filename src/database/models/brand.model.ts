import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { Brand } from "../../core/entities/brand/brand.entity";

@Entity()
export class BrandModel implements Brand {
  @PrimaryGeneratedColumn("uuid")
  id!: string;
  @Column()
  name!: string;
  @Column("text", { array: true })
  productTypes!: string[];
  @Column("text", { array: true })
  riders!: string[];
}
