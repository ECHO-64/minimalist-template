// ++++++++++++++++++++++++++++++++++++++++++++++++++++++
const navLinks = $("header nav ul li a");
// --------------------------------------
const navToggler = $("header .nav-toggeller");
// --------------------------------------
const pageImgs = $("* img");
const popup = $(".popup-full-img");
const popupBtn = $(".popup-full-img > i");
const popupImg = $(".popup-full-img img");
// --------------------------------------
const accLis = $(".accordion li");
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++

// toggle active class on nav links
navLinks.each(function () {
  // On click
  $(this).click(function () {
    navLinks.each(function () {
      $(this).removeClass("active");
    });
    $(this).addClass("active");
  });
  // On hover
  $(this).hover(function () {
    $(this).toggleClass("fw-b");
  });
});
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Toggle navbar on mobile devices
navToggler.click(function () {
  $("header ul").toggleClass("visible");
});

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++

// popup full image
pageImgs.each(function () {
  $(this).click(function () {
    popup.addClass("visible");
    popupImg.attr("src", $(this).attr("src"));
  });
});

popupBtn.click(function () {
  popup.removeClass("visible");
  popupImg.attr("src", "");
});

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++

// OPen and close accumlator rows
accLis.each(function () {
  $(this).click(function () {
    $(this).find("div").slideToggle();
  });
});
