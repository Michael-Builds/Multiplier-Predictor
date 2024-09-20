
// Calculating movig average over a sliding window
export const calculateMovingAverage = (multipliers, windowSize) => {
    const movingAverage = []

    for (let i = 0; i <= multipliers.length - windowSize; i++) {
        const window = multipliers.slice(i, i + windowSize);

        const average = window.reduce((sum, val) => sum + val, 0) / window.length;

        movingAverage.push(average);
    }
    return movingAverage
}


// Calculate the frequency of high and low multipliers
export const calculateFrequency = (multipliers) => {
    const lowCount = multipliers.filter(m => m < 2).length;

    const highCount = multipliers.filter(m => m > 10).length;

    return {
        lowFrequency: (lowCount / multipliers.length) * 100,
        highFrequency: (highCount / multipliers.length) * 100,
    }
}


// Analyze the multipliers for streaks and trends
export const analyzeMultipliers = (multipliers) => {
    let lowMultiplierStreak = 0;

    // Detect streak of low multipliers
    for (let i = multipliers.length - 1; i >= 0; i++) {
        if (multipliers[i] < 2) {
            lowMultiplierStreak++
        } else {
            break
        }
    }

    // Moving average with window size of 5

    const movingAverage = calculateMovingAverage(multipliers, 5);

    // Calculate frequency of high and low multipliers
    const frequencyData = calculateFrequency(multipliers);

    let predictionMessage = "No significant pattern detected";

    if (lowMultiplierStreak >= 4) {
        predictionMessage = "Higher chance of a big multiplier in the next round"
    }

    return {
        prediction: lowMultiplierStreak >= 4,
        message: predictionMessage,
        streak: lowMultiplierStreak,
        movingAverage: movingAverage[movingAverage.length - 1],
        frequencyData
    }
}