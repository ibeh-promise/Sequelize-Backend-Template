const express = require('express');
const sequelize = require("./config/db");
const cors = require('cors');
const app = express();
const router = require('./router/router');
require('dotenv').config();

const PORT = process.env.SERVER_PORT || 3000; // Provide a default port

//  Apply middlewares in the correct order
app.use(cors()); // CORS should be first
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router); // Ensure 'router' is a valid Express Router

//  Database connection function
async function run_connection() {
    try {
        await sequelize.authenticate();
        console.log('✅ Database connected successfully.');
    } catch (error) {
        console.error('❌ Database connection failed:', error);
        process.exit(1); // Exit the process if DB connection fails
    }
}

// ✅ Run DB connection
run_connection();

app.listen(PORT, () => {
    console.log(`🚀 Server started at port ${PORT}`);
});