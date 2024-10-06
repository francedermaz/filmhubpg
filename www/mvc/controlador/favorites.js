$(document).ready(function () {
    favoriteService.getFormattedFavorites(function (error, favorites) {
        if (error) {
            alert('No se pudieron cargar las películas favoritas');
            return;
        }

        var favoritesListContainer = $('#favorites-list');

        favorites.forEach(function (movie) {
            var movieItem = `
               <div class="movie-item" data-movie-id="${movie.id}" style="width: 170px; height: auto; margin: 5px; display: inline-block;">
                    <img src="https://image.tmdb.org/t/p/w500${movie.posterPath}" alt="${movie.title}" style="width: 100%; height: auto;">
                    <h3 style="color: #ffffff; text-align: center; height: 40px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${movie.title}</h3>
                </div>
            `;
            favoritesListContainer.append(movieItem);
        });

        $('.movie-item').click(function () {
            const movieId = $(this).data('movie-id');
            window.location.href = `detalle.html?id=${movieId}`;
        });
    });
});
