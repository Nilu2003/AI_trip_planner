import axios from "axios";

export const generateTripPlan = async (prompt) => {
    try {
        const response = await axios.post(
            "https://openrouter.ai/api/v1/chat/completions",
            {
                model: "openrouter/free",
                messages: [
                    {
                        role: "user",
                        content: prompt
                    }
                ]
            },
            {
                headers: {
                    "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
                    "Content-Type": "application/json",
                    "HTTP-Referer": "http://localhost:3000",
                    "X-Title": "AI Trip Planner"
                }
            }
        );

        // console.log("AI RAW RESPONSE:", response.data);

        return response.data.choices[0].message.content;

    } catch (error) {
        console.log("FULL ERROR:", error.response?.data || error.message);
        throw new Error("AI failed");
    }
};