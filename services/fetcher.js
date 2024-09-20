import { analyzeMultipliers } from "../utils/analytics.js";
import { scrapeMultipliers } from "../utils/scraper.js";
import { getLastMultipliers, saveMultipliers } from "./multiplier.services.js";

export const fetchPredictions = async (req, res) => {
    try {
        // Scrape the current multipliers
        const multipliers = await scrapeMultipliers();

        if (multipliers.length > 0) {
            // Save the scraped multipliers to the database
            await saveMultipliers(multipliers);

            // Fetch historical multipliers (last 100 rounds)
            const historicalMultipliers = await getLastMultipliers(100);

            // Analyze the historical and current multipliers
            const analysisResult = analyzeMultipliers(
                historicalMultipliers.map(m => m.value)
            );

            // Return the analysis result
            return res.status(200).json({
                success: true,
                message: "Predictions loaded successfully",
                analysisResult,
            });
        } else {
            // Handle the case where no multipliers were scraped
            return res.status(500).json({
                success: false,
                message: "Unable to scrape multipliers",
            });
        }
    } catch (error) {
        // Log and handle any unexpected errors
        console.error("Error fetching predictions:", error);
        return res.status(500).json({
            success: false,
            message: "Server error occurred while fetching predictions",
            error: error.message,
        });
    }
};
