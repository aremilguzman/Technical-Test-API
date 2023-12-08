import express from "express";
import morgan from "morgan";
import cors from "cors";
import clientRoutes from "./routes/client.routes";
import profileRoutes from "./routes/profile.routes";
import productRoutes from "./routes/product.routes";

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use(clientRoutes);
app.use(profileRoutes);
app.use(productRoutes);

export default app;
