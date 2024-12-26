const express = require("express");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");

const app = express();
const prisma = new PrismaClient();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Fetch all quotes (no pagination)
app.get("/quotes", async (req, res) => {
  const quotes = await prisma.quote.findMany();
  res.json(quotes);
});

app.get("/quotes/paginated", async (req, res) => {
  const { page = 1, pageSize = 5 } = req.query;
  const skip = (page - 1) * pageSize;

  // Fetch the current page of quotes
  const quotes = await prisma.quote.findMany({
    skip: skip,
    take: pageSize,
  });

  // Total number of quotes
  const total = await prisma.quote.count();

  // Calculate if there are more items
  const hasMore = skip + quotes.length < total;

  // Return the response with metadata
  res.json({
    quotes,
    meta: {
      total,
      currentPage: page,
      pageSize: pageSize,
      hasMore,
    },
  });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
