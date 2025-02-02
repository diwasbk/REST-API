const express = require("express");
const cors = require("cors");
const productRoute = require('./routes/productRoute');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());


// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
