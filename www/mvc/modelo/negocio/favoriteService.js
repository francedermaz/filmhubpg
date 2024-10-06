var favoriteService = {
    getFormattedFavorites: function(callback) {
        favoriteDAO.getFavorites(function(error, data) {
            if (error) {
                console.error('Error fetching favorites:', error);
                return callback(error, null);
            }

            var favorites = data.map(function(favoriteData) {
                return new Movie(
                    favoriteData.id,
                    favoriteData.title,
                    favoriteData.overview,
                    favoriteData.release_date,
                    favoriteData.vote_average,
                    favoriteData.poster_path,
                    favoriteData.isFavorite
                );
            });

            callback(null, favorites);
        });
    }
};
