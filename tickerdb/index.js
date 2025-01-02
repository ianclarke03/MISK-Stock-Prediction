const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// Middleware
app.use(cors());
app.use(express.json()); // req.body

// ROUTES


// index.ts (or app.ts)
import express, { Application, Request, Response, NextFunction } from 'express';


// Route handler for updating stock ticker
app.put('/api/users/:userId/stock', async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const { description, ticker } = req.body; // Assuming you're sending these in the request body

    // Your logic to update the stock ticker for the specified user
    // (e.g., update the database or perform any other necessary actions)

    // Respond with a success message
    res.status(200).json({ message: 'Stock ticker updated successfully!' });
  } catch (err) {
    console.error('Error updating stock ticker:', err.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});




// Create a ticker
app.post("/stocks", async (req, res) => {
  try {
    const { ticker, company } = req.body;
    const newTicker = await pool.query(
      "INSERT INTO stocks (ticker, company) VALUES ($1, $2) RETURNING *",
      [ticker, company]
    );

    res.json(newTicker.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// Get all tickers
// Define route handler for GET /stocks
app.get("/stocks", async (req, res) => {
    try {
      // Query the database or perform any necessary operations
      const stocks = await pool.query("SELECT * FROM stocks");
  
      // Send the response with the retrieved data
      res.json(stocks.rows);
    } catch (err) {
      // Handle errors
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  });
  

// Get a ticker by ID
app.get("/stocks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const ticker = await pool.query("SELECT * FROM stocks WHERE id = $1", [id]);

    res.json(ticker.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// Update a ticker by ID
app.put("/stocks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { ticker, company } = req.body;
    const updateTicker = await pool.query(
      "UPDATE stocks SET ticker = $1, company = $2 WHERE id = $3",
      [ticker, company, id]
    );

    res.json("Ticker was updated!");
  } catch (err) {
    console.error(err.message);
  }
});

// Delete a ticker by ID
app.delete("/stocks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTicker = await pool.query("DELETE FROM stocks WHERE id = $1", [id]);

    res.json("Ticker was deleted!");
  } catch (err) {
    console.error(err.message);
  }
});

// Start the server
const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
