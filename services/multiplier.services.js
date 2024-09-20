import multiplierModel from "../models/multiplier.js";

// Function to save multipliers to database
export const saveMultipliers = async (multipliers) => {
    for (const multiplier of multipliers) {
        const multiplierRecord = new multiplierModel({
            value: multiplier
        });
        await multiplierRecord.save()
    }
}


// Function to fetch the last 100 multipliers from database
export const getLastMultipliers = async (limit = 100) => {
    return await multiplierModel.find().sort({ createdAt: -1 }).limit(limit).exec();
}
