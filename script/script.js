var md = new MobileDetect(window.navigator.userAgent);

// header 스크롤 이벤트
window.onscroll = function () {
  let cont = document.querySelector("#about").getBoundingClientRect().top;
  let header = document.querySelector("header");
  let headerHeight = header.offsetHeight;

  if (cont <= headerHeight) {
    header.classList.add("on");
  } else {
    header.classList.remove("on");
  }
};

if (!md.mobile()) {

  new fullpage("#fullpage", {
    //이동
    lockAnchors: true,
    anchors: ["main", "About", "skill", "portfolio", "contact"],
    navigation: true,
    navigationPosition: "right",
    navigationTooltips: ["main", "About", "skill", "portfolio", "contact"],
    // slidesNavigation: false,
    // slidesNavPosition: "bottom",

    //스크롤
    css3: true,
    scrollingSpeed: 700,
    autoScrolling: true,
    fitToSection: true,
    fitToSectionDelay: 1000,
    scrollBar: true,
    showActiveTooltip: true,
    menu: ".nav",
    easing: "easeInOutCubic",
    easingcss3: "ease",
    loopBottom: false,
    loopTop: false,
    loopHorizontal: true,
    continuousVertical: false,
    continuousHorizontal: false,
    scrollHorizontally: false,
    interlockedSlides: false,
    dragAndMove: false,
    offsetSections: false,
    resetSliders: false,
    fadingEffect: false,
    normalScrollElements: "#element1, .element2",
    scrollOverflow: false,
    scrollOverflowReset: false,
    scrollOverflowOptions: null,
    touchSensitivity: 15,
    bigSectionsDestination: null,

    //접근성
    keyboardScrolling: true,
    animateAnchor: true,
    recordHistory: true,

    //디자인
    controlArrows: true,
    verticalCentered: true,
    paddingTop: "3em",
    paddingBottom: "10px",
    fixedElements: "header",
    // fixedElements: "#header, .footer",
    responsiveWidth: 0,
    responsiveHeight: 0,
    responsiveSlides: false,
    parallax: false,
    parallaxOptions: {
      type: "reveal",
      percentage: 62,
      property: "translate",
    },
    cards: false,
    cardsOptions: {
      perspective: 100,
      fadeContent: true,
      fadeBackground: true,
    },

    //맞춤 선택자
    sectionSelector: "section",
    slideSelector: "slide",

    lazyLoading: true,
  });
}


//top button
$("#top").on("click", function () {
  $("html,body").stop().animate({
      scrollTop: 0,
    },
    500
  );
});