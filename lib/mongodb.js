import mongoose from "mongoose";

export const connectMongoDB = async () => {
    try {
        const mongoURI = process.env.MONGODB_URI;
        console.log("Connecting to MongoDB with URI:", "mongodb+srv://contact-form:iRsEz35NfAzn8p!@prospexplore.6wyph.mongodb.net/authapp?retryWrites=true&w=majority&appName=ProspeXplore"); // Debugging line
        await mongoose.connect("mongodb+srv://contact-form:iRsEz35NfAzn8p!@prospexplore.6wyph.mongodb.net/authapp?retryWrites=true&w=majority&appName=ProspeXplore"),
        console.log("MongoDB connected");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};