import axios from "axios";
import * as cheerio from "cheerio";
import { AVIATOR_URL } from "../config/index.js";

export const scrapeMultipliers = async () => {
    try {
        const { data } = await axios.get(AVIATOR_URL);
        const $ = cheerio.load(data);
        const multipliers = []

        $(`div.multiplier-class`).each((i, element) => {
            const multiplier = parseFloat($(element).text())

            multipliers.push(multiplier);
        })
        return multipliers;

    } catch (error) {
        console.log("Error scraping multipliers", error)
        return []
    }
}