import express from "express";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";

const app = express();

// Configure CORS
app.use(cors({
  origin: "*", // Allow all origins (for development)
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"]
}));

app.use(express.json());
app.use("/images", express.static("public/images"));
// routes
app.use("/api", productRoutes);

 const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
