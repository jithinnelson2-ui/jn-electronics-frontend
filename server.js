import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Serve all static files (HTML, CSS, JS, images)
app.use(express.static(__dirname));

// Serve index.html for all routes (single-page app fallback)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Use Render's provided port or fallback to 3000 locally
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🌐 Frontend running on http://localhost:${PORT}`);
});
