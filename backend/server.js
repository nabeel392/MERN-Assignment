const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); // Allow frontend requests
app.use(express.json()); // Parse JSON body

// Sample data (Random people and their professions)
const data = [
  { id: 1, name: "Alice Johnson", profession: "Software Engineer" },
  { id: 2, name: "Michael Smith", profession: "Data Scientist" },
  { id: 3, name: "Sophia Martinez", profession: "Mechanical Engineer" },
  { id: 4, name: "David Brown", profession: "Graphic Designer" },
  { id: 5, name: "Olivia Wilson", profession: "Doctor" },
  { id: 6, name: "Liam Miller", profession: "Architect" },
  { id: 7, name: "Emma Davis", profession: "Photographer" },
  { id: 8, name: "Ethan Garcia", profession: "Pilot" },
  { id: 9, name: "Isabella Anderson", profession: "Musician" },
  { id: 10, name: "James Thomas", profession: "Teacher" },
];

// API endpoint with pagination
app.get("/data", (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 5;
  const startIndex = (page - 1) * limit;
  const paginatedData = data.slice(startIndex, startIndex + limit);

  res.json({
    page,
    limit,
    total: data.length,
    totalPages: Math.ceil(data.length / limit),
    data: paginatedData,
  });
});

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
