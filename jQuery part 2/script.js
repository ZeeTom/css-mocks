"use strict";

$("form").on("submit", function (e) {
  e.preventDefault();
  let title = $("#title").val();
  let rating = $("#rating").val();
  let $newLi = $("<li class='movie'></li>");
  $newLi.append(`<span>${title} - ${rating}   </span>`);
  $newLi.append("<button class='remove'>x</button>");
  $(".movie-list").append($newLi);
});

$(".movie-list").on("click", "li", function (e) {
  e.target.parentNode.remove();
});

console.log($(".movie-list"));
