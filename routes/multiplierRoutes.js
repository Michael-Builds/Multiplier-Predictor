import express from "express";
import { fetchPredictions } from "../services/fetcher.js";

const router = express.Router()

router.get("/get-predictions", fetchPredictions)

export default router;