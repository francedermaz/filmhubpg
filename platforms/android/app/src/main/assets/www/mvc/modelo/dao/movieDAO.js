var movieDAO = {
    getMovies: function (callback) {
        $.ajax({
            url: 'https://filmhubapi.onrender.com/api/movies?language=es-AR&region=AR',
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
