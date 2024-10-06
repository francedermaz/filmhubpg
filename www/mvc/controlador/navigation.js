$('#logo').click(goHome);
function goHome() {
    window.location.href = '../vista/principal.html';
}

$('#myfavorites').click(goFavorites);
function goFavorites() {
    window.location.href = '../vista/favorites.html';
}

$('#go-back').click(function () {
    window.location.href = '../vista/principal.html';
});
