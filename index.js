import express from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const app = express();
const port = 5000;

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Serve static files from the 'client/build' directory
app.use(express.static(join(__dirname, "./client/build")));

// Handle all other routes
app.get("*", (_, res) => {
  res.sendFile(join(__dirname, "./client/build/index.html"), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
