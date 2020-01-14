$(function() {
  "use strict";
  // let human = { firstname: "cécile", lastname: "Pham" };
  // let jobTitle = "Développeuse web junior javascript";
  let tel = "06 27 50 59 66";
  let mail = "cecilepham@gmail.com";
  let city = "  Aix en Provence";
  let linkedin = "linkedin";
  let github = "github";

  // $(".name").text(
  //   `${human.firstname[0].toUpperCase() +
  //     human.firstname.slice(1)} ${human.lastname[0].toUpperCase() +
  //     human.lastname.slice(1)}`
  // );

  // $(".job-title").text(`${jobTitle}`);
  $(".tel > div").after(`<p>${tel}</p>`);
  $(".mail > div").after(`<p>${mail}</p>`);
  $(".city > div").after(`<p>${city}</p>`);
  $(".linkedin > div").after(`<p>${linkedin}</p>`);
  $(".github > div").after(`<p>${github}<p>`);

  $("body").scrollspy({ target: "#list-example" });

  if ($(window).width() > 700) {
    $(".nav-xs").addClass("hidden");
    $(".nav-menu").show();
    $("#contact > div.row > h4.tel > p").addClass("d-md-none");
    $("#contact > div.row > h4.mail > p").addClass("d-md-none");
    $("#contact > div.row > h4.city > p").addClass("d-md-none");
    $("#contact > div.row > h4.linkedin > p").addClass("d-md-none");
    $("#contact > div.row > h4.github > p").addClass("d-md-none");
  }

  // $(".img-container").hover(
  //   function() {
  //     $(this).animate({ width: "400px", height: "400px" }, 1000);
  //   },
  //   function() {
  //     $(this).animate({ width: "200px", height: "200px" }, 1000);
  //   }
  // );
});
