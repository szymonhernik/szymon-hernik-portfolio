

// TESTING
$("document").ready(function() {
  $("#projects").ready(function() {
    // console.log("hey");
    $("#projects").click();
  });
});



window.addEventListener('DOMContentLoaded', (event) => {


  // ASYNCHRONOUS CONTENT //
  let ajaxContainer = $("#projects-container-async")

  // NAVIGATION //
  let navProjects = $("#projects")
  let navInfo = $("#info")
  let navIndex = $("#index")





  // ––––––––PROJECTS NAV CLICK HANDLING ––––––––//

  navProjects.on("click", function(e) {

    e.preventDefault();

    // ASYNCHRONOUS PROJECTS //
    ajaxContainer.load("Projects.html #async-content", function(e) {

      // BIG NAVIGATION //
      $("main").addClass("animate-up")
      $("main").removeClass("animate-down")
      $("main").removeClass("animate-from-bottom")

      // CONTAINER WITH PROJECTS //
      $(".async-container").addClass("animate-in")
      $(".nav-projects").addClass("animate-in")
      $(".async-container").removeClass("animate-out")
      $(".nav-projects").removeClass("animate-out")

      // OVERLAY CONTAINER WITH PROJECTS //
      $(".project-overlay").removeClass("project-overlay--activated")


      // -------SCROLLING THE PROJECT PAGE-------- //
      let firstSectionTopOffset, secondSectionTopOffset, thirdSectionTopOffset
      let lastScrollTop, st
      let up = 0
      let waitedOnBottom = 0

      $("#async-content").on('scroll', function(event) {

        // TARGET POSITION OF THE FIRST SECTION IN PROJECT PAGE //
        firstSectionTopOffset = $("#async-content section")[0].offsetTop - $("#async-content")[0].offsetTop - 20
        secondSectionTopOffset = $("#async-content section")[1].offsetTop - $("#async-content")[0].offsetTop - 20
        thirdSectionTopOffset = $("#async-content section")[2].offsetTop - $("#async-content")[0].offsetTop - 20


        if($(this).scrollTop() >= secondSectionTopOffset && $(this).scrollTop() <= thirdSectionTopOffset) {
            $(".projects-category").html("WEB DESIGN AND DEVELOPMENT")

        } else if ($(this).scrollTop() <= firstSectionTopOffset ) {
          $(".projects-category").html("EDITORIAL DESIGN")
        } else if ($(this).scrollTop() >= thirdSectionTopOffset && $(this).scrollTop() <= $(this)[0].scrollHeight) {
          $(".projects-category").html("INTERACTIVE MEDIA")
        }

        // WHEN REACHED THE END OF THE PROJECT PAGE //
        if ($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
          // alert('end reached');
          waitedOnBottom = 1

          // WAIT 800ms BEFORE AUTOMATICALLY SHOWING THE MAIN NAVIGATION //
          setTimeout(function() {
            if (waitedOnBottom==1) {

              // SLIDE UP THE PROJECT PAGE //
              $(".async-container").addClass("animate-out")

              // BRING MAIN NAVIGATION FROM THE BOTTOM //
              $("main").addClass("animate-from-bottom")
              $("main").removeClass("animate-up")

              // SLIDE UP THE PROJECT NAVIGATION //
              $(".nav-projects").addClass("projectsMenu-out")
              $(".project-overlay").addClass("project-overlay--activated")

              // EMPTY THE ASYNC CONTENT //
              setTimeout(function() {
                ajaxContainer.empty()
              }, 800);
            }
          }, 2000);
        } else {
          waitedOnBottom = 0
        }

        // IF THE SCROLL PASSED THE FIRST SECTION IN PROJECTS PAGE //
        // HIDE AND SHOW SZYMON HERNIK ON SCROLL IN A PROJECT PAGE //
        st = $(this).scrollTop();
        if (st >= lastScrollTop) {
          // console.log("down");
          up = 0
          if ($(this).scrollTop() >= firstSectionTopOffset) {
            $(".nav-projects").addClass("projectsMenu")
            $(".nav-projects").removeClass("projectsMenu-down")

          }
        } else {
          // console.log("up");
          if ($(this).scrollTop() >= firstSectionTopOffset) {
            if (up == 0) {
              $(".nav-projects").removeClass("projectsMenu")
              $(".nav-projects").addClass("projectsMenu-down")
              up = 1
            }
          }
        }
        lastScrollTop = st;

      })

      // GO BACK TO THE MAIN NAV //
      $("#home").on("click", function() {

        // SLIDE IN THE MAIN NAV //
        $("main").addClass("animate-down")
        $("main").removeClass("animate-up")

        // LIGHTS OFF THE PROJECT PAGE //
        $(".project-overlay").addClass("project-overlay--activated")

        // EMPTY AJAX CONTENT //
        setTimeout(function() {
          ajaxContainer.empty()
        }, 500);

      })
    });

  })


  // ––––––––INFO NAV CLICK HANDLING ––––––––//

  navInfo.on("click", function(e) {

    // e.preventDefault();
    //
    // // ASYNCHRONOUS //
    // ajaxContainer.load("Info.html #async-content", function(e) {
    //   $("#async-content").addClass("animate-in")
    //
    //   $("#home").on("click", function() {
    //     $("#async-content").addClass("animate-out")
    //
    //     setTimeout(function() {
    //       ajaxContainer.empty()
    //     }, 500);
    //   })
    // });

    e.preventDefault();

    // ASYNCHRONOUS INFO //
    ajaxContainer.load("Info.html #async-content", function(e) {

      // BIG NAVIGATION //
      $("main").addClass("animate-up")
      $("main").removeClass("animate-down")
      $("main").removeClass("animate-from-bottom")

      // CONTAINER WITH INFO //
      $(".async-container").addClass("animate-in")
      $(".nav-projects").addClass("animate-in")
      $(".async-container").removeClass("animate-out")
      $(".nav-projects").removeClass("animate-out")

      // OVERLAY CONTAINER WITH INFO //
      $(".project-overlay").removeClass("project-overlay--activated")


      // GO BACK TO THE MAIN NAV //
      $("#home").on("click", function() {

        // SLIDE IN THE MAIN NAV //
        $("main").addClass("animate-down")
        $("main").removeClass("animate-up")

        // LIGHTS OFF THE INFO PAGE //
        $(".project-overlay").addClass("project-overlay--activated")

        // EMPTY AJAX CONTENT //
        setTimeout(function() {
          ajaxContainer.empty()
        }, 500);

      })
    });

  })


  // ––––––––INDEX NAV CLICK HANDLING ––––––––//

  navIndex.on("click", function(e) {

    e.preventDefault();

    // ASYNCHRONOUS INDEX //
    ajaxContainer.load("Index-Projects.html #async-content", function(e) {

      // BIG NAVIGATION //
      $("main").addClass("animate-up")
      $("main").removeClass("animate-down")
      $("main").removeClass("animate-from-bottom")

      // CONTAINER WITH INDEX //
      $(".async-container").addClass("animate-in")
      $(".nav-projects").addClass("animate-in")
      $(".async-container").removeClass("animate-out")
      $(".nav-projects").removeClass("animate-out")

      // OVERLAY CONTAINER WITH INDEX //
      $(".project-overlay").removeClass("project-overlay--activated")


      // GO BACK TO THE MAIN NAV //
      $("#home").on("click", function() {

        // SLIDE IN THE MAIN NAV //
        $("main").addClass("animate-down")
        $("main").removeClass("animate-up")

        // LIGHTS OFF THE INDEX PAGE //
        $(".project-overlay").addClass("project-overlay--activated")

        // EMPTY AJAX CONTENT //
        setTimeout(function() {
          ajaxContainer.empty()
        }, 500);

      })

      // INDEX SLIDER

      // let sliderImg = $("#slider-img").attr('src')

      let current, cat, key, titleKey

      $("li").hover(function () {
        // console.log($(this).attr("data-cat"),  $(this).index()+1);


          cat = $(this).attr("data-cat")
          current = $(this).index() + 1
          key = $(this).attr("data-key")
          titleKey = $("#project-title-key", $(this)).html()

          // console.log($("#slider-img").attr('src'));

          sliderImg = $("#slider-img").attr('src').split("img/INDEX/")

          $("#project-key").html(key)
          $("#title-key").html(titleKey)

          setTimeout(function() {
            // $("#slider-img").fadeOut("slow")

            $("#slider-img").attr('src', "img/INDEX/"+ cat + "-" + current + ".jpg")

            // $("#slider-img").fadeIn("slow")
          }, 500);




        // console.log($("#slider-image").attr("src"));
      })


    });

  })






});
