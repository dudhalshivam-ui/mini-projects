
const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const app = express();
const PORT = 3000;

// Serve frontend files from the public folder
app.use(express.static(path.join(__dirname, "public")));

// Search movies
app.get("/api/movies", async (req, res) => {
    try {
        const movieName = req.query.query?.trim();

        if (!movieName) {
            return res.status(400).json({
                error: "Please enter a movie name."
            });
        }

        const url = new URL(
            "https://api.themoviedb.org/3/search/movie"
        );

        url.searchParams.set("query", movieName);

        const response = await fetch(url, {
            headers: {
                Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
                accept: "application/json"
            }
        });

        if (!response.ok) {
            console.error("TMDB returned status:", response.status);
            return res.status(502).json({
                error: "Could not retrieve movies from TMDB."
            });
        }

        const data = await response.json();
        res.json(data);

    } catch (error) {
        console.error("Server error:", error.message);

        res.status(500).json({
            error: "Something went wrong on the server."
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});


