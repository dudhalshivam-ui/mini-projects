
const searchForm = document.getElementById("searchForm");
const movieInput = document.getElementById("movieInput");
const movieResults = document.getElementById("movieResults");
const message = document.getElementById("message");

searchForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const movieName = movieInput.value.trim();

    if (!movieName) {
        message.textContent = "Please enter a movie name.";
        return;
    }

    message.textContent = "Searching...";
    movieResults.innerHTML = "";

    try {
        const response = await fetch(
            `/api/movies?query=${encodeURIComponent(movieName)}`
        );

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || "Something went wrong.");
        }

        if (data.results.length === 0) {
            message.textContent = "No movies found.";
            return;
        }

        message.textContent = "";

        data.results.forEach(function (movie) {
            const card = document.createElement("div");
            card.className = "movie-card";

            const poster = document.createElement("img");
            poster.className = "movie-poster";
            poster.alt = movie.title;

            if (movie.poster_path) {
                poster.src =
                    `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
            }

            const info = document.createElement("div");
            info.className = "movie-info";

            const title = document.createElement("h2");
            title.textContent = movie.title;

            const releaseDate = document.createElement("p");
            releaseDate.textContent =
                "Release date: " + (movie.release_date || "Unknown");

            const rating = document.createElement("p");
            rating.textContent =
                "Rating: " + (movie.vote_average?.toFixed(1) ?? "N/A");

            info.append(title, releaseDate, rating);
            card.append(poster, info);
            movieResults.appendChild(card);
        });

    } catch (error) {
        message.textContent = "Unable to search movies. Please try again.";
        console.error(error);
    }
});
