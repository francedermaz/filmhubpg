var favoriteDAO = {
    getFavorites: function (callback) {
        $.ajax({
            url: 'https://filmhubapi.onrender.com/api/favorites?language=es-AR&region=AR',
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
    },

    addFavorite: function (movieId, callback) {
        $.ajax({
            url: 'https://filmhubapi.onrender.com/api/favorites',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            data: JSON.stringify({movieId: Number(movieId)}),
            success: function (response) {
                callback(null, response);
            },
            error: function (error) {
                callback(error, null);
            }
        });
    }
};
