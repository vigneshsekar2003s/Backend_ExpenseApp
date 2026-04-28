require('dotenv').config();

const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors({
    origin: "*",   
    methods: ["GET", "POST", "PUT", "DELETE"],
}));

// Connect to MongoDB
connectDB();

// Routes

app.use('/api/expenses', require('./routes/expenseRoutes'));

app.get('/', (req, res) => {
  res.send("Server Working");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});