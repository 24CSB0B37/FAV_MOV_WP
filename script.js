document.addEventListener("DOMContentLoaded", function () {
    const movie_input = document.getElementById("movie_input");
    const add_movie = document.getElementById("add_movie");
    const clear_movies = document.getElementById("clear_movies");
    const movie_list = document.getElementById("movie_list");
    const movie_number = document.getElementById("movie_number");

    let movies = [];

    function update_list() {
        movie_list.innerHTML = "";
        movies.forEach((movie, index) => {
            const li = document.createElement("li");
            li.textContent = movie;
            li.addEventListener("click", () => ask_delete_movie(index));
            movie_list.appendChild(li);
        });
        movie_number.textContent = movies.length;
    }

    add_movie.addEventListener("click", function () {
        const movie_name = movie_input.value.trim();
        if (movie_name) {
            movies.push(movie_name);
            movie_input.value = "";
            update_list();
        } else {
            alert("Please enter a movie name!");
        }
    });

    function ask_delete_movie(index) {
        const sure = confirm(`Are you sure you want to remove "${movies[index]}"?`);
        if (sure) {
            movies.splice(index, 1);
            update_list();
        }
    }

    clear_movies.addEventListener("click", function () {
        const sure = confirm("Are you sure you want to clear the entire list?");
        if (sure) {
            movies = [];
            update_list();
        }
    });
});


