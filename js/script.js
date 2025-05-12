$(document).on("click", 'a[href="#"]', function (e) {
  e.preventDefault();
});

$(function () {
  Splitting();
});

$(function () {
  var prevScrollTop = 0;
  document.addEventListener("scroll", function () {
    var nowScrollTop = $(window).scrollTop();

    if (nowScrollTop > prevScrollTop) {
      $("header").addClass("active");
    } else {
      $("header").removeClass("active");
    }
    prevScrollTop = nowScrollTop;
  });
});

//03.scrolla.js
$(function () {
  $(".animate").scrolla({
    moblie: true,
    once: false,
  });
});

$(function () {
  $(".svgAni")
    .find("#svgAni05")
    .each(function (i, path) {
      var length = path.getTotalLength();
      //alert(length);
    });
});

// .con01 gsap 애니메이션
$(function () {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".con01",
        start: "0% 80%",
        end: "100% 100%",
        scrub: 1,
      },
    })

    .to(
      ".wrap",
      { backgroundColor: "#fff", color: "#000", ease: "none", duration: 5 },
      0
    )
    .to(".svgAni path", { stroke: "#000", ease: "none", duration: 5 }, 0)
    .to(".scroll", { opacity: "0", ease: "none", duration: 5 }, 0)
    .fromTo(
      ".videoWrap video",
      { "clip-path": "inset(60% round 30%)" },
      { "clip-path": "inset( 0% round 0%)", ease: "none", duration: 10 },
      0
    );

  //.con02 gsap animation
  //title글자애니메이션
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".con02",
        start: "0% 100%",
        end: "0% 20%",
        scrub: 1,
        //markers: true
      },
    })

    .fromTo(
      ".con02 .title .a",
      { x: "-100%" },
      { x: "0%", ease: "none", duration: 5 },
      0
    )
    .fromTo(
      ".con02 .title .b",
      { x: "100%" },
      { x: "0%", ease: "none", duration: 5 },
      0
    );

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".workList",
        start: "0% 100%",
        end: "0% 100%",
        scrub: 1,
        // markers:true
      },
    })
    .to(
      ".wrap",
      { backgroundColor: "#000", color: "#fff", ease: "none", duration: 5 },
      0
    )

    .to(
      ".con02 .title",
      {
        position: "fixed",
        ease: "none",
        left: "0",
        top: "0",
        width: "100%",
        duration: 5,
      },
      0
    )

    .fromTo(
      ".workList",
      { margin: "0 auto" },
      {
        margin: "100vh auto 0",
        position: "relative",
        zIndex: "10",
        duration: 1,
      },
      0
    );

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".workList",
        start: "100% 50%",
        end: "100% 0%",
        scrub: 1,
        // markers:true
      },
    })
    .to(".con02 .title .a", { x: "-100%", ease: "none", duration: 5 }, 0)
    .to(".con02 .title .b", { x: "100%", ease: "none", duration: 5 }, 0);
});

//simplyScroll
$(function () {
  $(".con03 .list").simplyScroll({
    speed: 4,
    pauseOnHover: false,
    pauseOnTouch: false,
  });
});

//menuOpen
$(function () {
  $(".menuOpen").on("click", function () {
    $(".gnb").toggleClass("on");
    $(this).toggleClass("on");
    $("body").toggleClass("on");
  });

  // GNB 메뉴 링크 클릭 시 메뉴 닫기
  $(".gnb a").on("click", function () {
    $(".gnb").removeClass("on");
    $(".menuOpen").removeClass("on");
    $("body").removeClass("on");
  });
});
