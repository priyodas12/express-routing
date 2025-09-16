import express from "express";
import product from "./routes/product.js";

const app = express();

app.use(express.json());

app.use("/api/v1/products", product);

app.listen(3000, "localhost", () => {
    console.log("Server running on port 3000");
});