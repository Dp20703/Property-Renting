require("dotenv").config(); 

const { MongoClient } = require("mongodb");

const url = process.env.MONGODB_URI; 
const client = new MongoClient(url);

async function connectDB() {
    try {
        await client.connect();
        console.log("✅ Connected to db");
        const database = client.db("RentingProperties");
        return database;
    } catch (error) {
        console.error("❌ MongoDB Connection Error:", error.message);
        process.exit(1);
    }
}

module.exports = connectDB;
