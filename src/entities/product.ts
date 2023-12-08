import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Client } from "./client";

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  sku: number;

  @Column()
  productName: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column()
  stock: number;

  @ManyToOne(() => Client, (client) => client.products)
  @JoinColumn()
  client: Client;
}
