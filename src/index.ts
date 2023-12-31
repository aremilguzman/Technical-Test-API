import "reflect-metadata";
import app from "./app";
import { AppDataSource } from "./db";

async function main() {
  try {
    await AppDataSource.initialize();
    console.log("Database conected");
    app.listen(4000);
    console.log("Server is listening on port", 4000);
  } catch (error) {
    console.error(error);
  }
}

main();
