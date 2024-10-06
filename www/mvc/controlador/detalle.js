$('#logo').click(goHome);
function goHome() {
    window.location.href = '../vista/principal.html';
}

$(document).ready(function () {
    var urlParams = new URLSearchParams(window.location.search);
    var movieId = urlParams.get('id');

    if (movieId) {
        detalleService.getFormattedMovieDetails(movieId, function (error, movie) {
            if (error) {
                alert('No se pudieron cargar los detalles de la película');
                return;
            }

            $('#movie-title').text(movie.title);
            $('#movie-overview').text(movie.overview);
            $('#movie-release-date').text(`Fecha de lanzamiento: ${movie.releaseDate}`);
            $('#movie-rating').text(`Puntuación: ${movie.voteAverage}`);
            $('#movie-poster').attr('src', `https://image.tmdb.org/t/p/w500${movie.posterPath}`);
        });
    } else {
        alert('ID de película no encontrado');
    }
});
