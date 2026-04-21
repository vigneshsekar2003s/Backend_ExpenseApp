require('dotenv').config();

const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');


const app = express();

app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/expenses', require('./routes/expenseRoutes'));

// Test route
app.post('/test', (req, res) => {
  res.send("Test route working");
});

app.get('/', (req, res) => {
  res.send("Server Working");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});