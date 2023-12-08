import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { Profile } from "./profile";
import { Product } from "./product";

@Entity()
export class Client extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @Column()
  phone: string;

  @OneToOne(() => Profile, (profile) => profile.client)
  @JoinColumn()
  profile: Profile;

  @OneToMany(() => Product, (product) => product.client)
  products: Product[];

}
