import mongoose from "mongoose";

const multiplierSchema = new mongoose.Schema({
    value: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

const multiplierModel = mongoose.model("Multiplier", multiplierSchema);
export default multiplierModel;