function Movie(id, title, overview, releaseDate, voteAverage, posterPath, isFavorite = false) {
    this.id = id;
    this.title = title;
    this.overview = overview;
    this.releaseDate = releaseDate;
    this.voteAverage = voteAverage;
    this.posterPath = posterPath;
    this.isFavorite = isFavorite;
}
