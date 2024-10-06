$('#myfavorites').click(goFavorites);
function goFavorites() {
    window.location.href = '../vista/favorites.html';
}

$('#logo').click(goHome);
function goHome() {
    window.location.href = '../vista/principal.html';
}

$(document).ready(function () {
    movieService.getFormattedMovies(function (error, movies) {
        if (error) {
            alert('No se pudieron cargar las películas');
            return;
        }

        var movieListContainer = $('#movie-list');

        movies.forEach(function (movie) {
            var movieItem = `
               <div class="movie-item" data-movie-id="${movie.id}" style="width: 170px; height: auto; margin: 5px; display: inline-block; cursor: pointer;">
                    <img src="https://image.tmdb.org/t/p/w500${movie.posterPath}" alt="${movie.title}" style="width: 100%; height: auto;">
                    <h3 style="color: #ffffff; text-align: center; height: 40px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${movie.title}</h3>
                </div>
            `;
            movieListContainer.append(movieItem);
        });

        $('.movie-item').click(function () {
            const movieId = $(this).data('movie-id');
            window.location.href = `detalle.html?id=${movieId}`;
        });
    });
});
