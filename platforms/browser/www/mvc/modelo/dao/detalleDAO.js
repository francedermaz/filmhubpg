var detalleDAO = {
    getMovieDetails: function (movieId, callback) {
        $.ajax({
            url: `https://filmhubapi.onrender.com/api/movies/${movieId}?language=es-AR&region=AR`,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            success: function (response) {
                callback(null, response);
            },
            error: function (error) {
                callback(error, null);
            }
        });
    }
};
