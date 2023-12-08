import { config } from "dotenv";
import { DataSource } from "typeorm";
import { Client } from "./entities/client";
import { Profile } from "./entities/profile";
import { Product } from "./entities/product";

config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  port: 5432,
  database: "ts-crud",
  entities: [Client, Profile, Product],
  logging: true,
  synchronize: true,
});
