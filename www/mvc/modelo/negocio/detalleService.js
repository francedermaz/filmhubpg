var detalleService = {
    getFormattedMovieDetails: function (movieId, callback) {
        detalleDAO.getMovieDetails(movieId, function (error, data) {
            if (error) {
                console.error('Error fetching movie details:', error);
                return callback(error, null);
            }

            var movie = new Movie(
                data.id,
                data.title,
                data.overview,
                data.release_date,
                data.vote_average,
                data.poster_path,
                true
            );

            callback(null, movie);
        });
    }
};
