$('#myfavorites').click(goFavorites);
function goFavorites() {
    window.location.href = '../vista/favorites.html';
}

$('#logo').click(goHome);
function goHome() {
    window.location.href = '../vista/principal.html';
}

$(document).ready(function() {
    movieService.getFormattedMovies(function(error, movies) {
        if (error) {
            alert('No se pudieron cargar las películas');
            return;
        }

        var movieListContainer = $('#movie-list');

        movies.forEach(function(movie) {
            var movieItem = `
                <div class="movie-item">
                    <img src="https://image.tmdb.org/t/p/w500${movie.posterPath}" alt="${movie.title}">
                    <h3>${movie.title}</h3>
                </div>
            `;
            movieListContainer.append(movieItem);
        });
    });
});
