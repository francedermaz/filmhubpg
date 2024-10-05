var movieService = {
    getFormattedMovies: function(callback) {
        movieDAO.getMovies(function(error, data) {
            if (error) {
                console.error('Error fetching movies:', error);
                return callback(error, null);
            }

            var movies = data.map(function(movieData) {
                return new Movie(
                    movieData.id,
                    movieData.title,
                    movieData.overview,
                    movieData.release_date,
                    movieData.vote_average,
                    movieData.poster_path,
                    false
                );
            });

            callback(null, movies);
        });
    }
};
