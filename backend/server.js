const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

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


app.get("/data", (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 5;
  
      // Check for invalid page/limit values
      if (page < 1 || limit < 1) {
        return res.status(400).json({ error: "Page and limit must be positive numbers." });
      }
  
      const startIndex = (page - 1) * limit;
      const paginatedData = data.slice(startIndex, startIndex + limit);
  
      // If no data is available for the given page
      if (paginatedData.length === 0) {
        return res.status(404).json({ error: "No data available for the requested page." });
      }
  
      res.json({
        page,
        limit,
        total: data.length,
        totalPages: Math.ceil(data.length / limit),
        data: paginatedData,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
  // Handle unknown routes
  app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
  });

const PORT = 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
