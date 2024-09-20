import express from "express";
import cors from "cors"
import router from "./routes/multiplierRoutes.js";
import { NODE_ENV, PORT } from "./config/index.js";
import colors from "colors"
import { connectDB } from "./config/db.js";

const app = express();


// middlewares
app.use(cors())
app.use(express.json())

// routes
app.use("/api", router)


app.listen(PORT, () => {
    console.log(colors.bgCyan.white(`Server running in ${NODE_ENV} mode on port ${PORT}`))
    connectDB();
});