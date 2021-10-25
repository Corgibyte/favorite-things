$(document).ready(function() {
  $("form#favoritesForm").submit(function(event) {
    event.preventDefault();
    const fav1 = $("input#favorite1").val();
    const fav2 = $("input#favorite2").val();
    const fav3 = $("input#favorite3").val();
    const fav4 = $("input#favorite4").val();
    const fav5 = $("input#favorite5").val();

    let favorites = [fav1, fav2, fav3, fav4, fav5];

    const favFromList1 = favorites[1];
    const favFromList2 = favorites[0];
    const favFromList3 = favorites[2];

    let newFavorites = [];

    newFavorites.push(favFromList1);
    newFavorites.push(favFromList2);
    newFavorites.push(favFromList3);

    $("#responseList").append("<li>" + newFavorites[0] + "</li>");
    $("#responseList").append("<li>" + newFavorites[1] + "</li>");
    $("#responseList").append("<li>" + newFavorites[2] + "</li>");
  });
});