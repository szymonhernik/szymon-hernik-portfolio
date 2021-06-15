

// TESTING
// $("document").ready(function() {
//   $("#projects").ready(function() {
//     // console.log("hey");
//     $("#projects").click();
//   });
// });



window.addEventListener('DOMContentLoaded', (event) => {

  // ASYNCHRONOUS CONTENT //
  let ajaxContainer = $("#projects-container-async")

  let infoNavProjects = $("#projects-info")
  let indexNavProjects = $("#projects-index")
  let projectsNavProjects = $("#projects-projects")



  // ––––––––INFO NAV CLICK HANDLING ––––––––//

  infoNavProjects.on("click", function(e) {



    e.preventDefault();

    // ASYNCHRONOUS INFO //
    ajaxContainer.load("../Info.html #async-content", function(e) {

      $(".nav--right").addClass("from-project")
      $("#projects-container-async").addClass("from-projects")

      $("#close").on("click", function() {
        // EMPTY AJAX CONTENT //
        setTimeout(function() {
          ajaxContainer.empty()
        }, 100);
      })

      $("#home").on("click", function() {
        // EMPTY AJAX CONTENT //
        window.location.href = "/";
        setTimeout(function() {
          ajaxContainer.empty()
        }, 100);
      })

    });
  })

  // ––––––––INDEX NAV CLICK HANDLING ––––––––//

  indexNavProjects.on("click", function(e) {

    e.preventDefault();

    // ASYNCHRONOUS INDEX //
    ajaxContainer.load("../Index-Projects.html #async-content", function(e) {
      $(".nav--right").addClass("from-project")
      $("#new-index img").attr('src', "../"+$("img").attr('src'))


      $("#projects-container-async").addClass("from-projects")

      $("#close").on("click", function() {
        // EMPTY AJAX CONTENT //
        setTimeout(function() {
          ajaxContainer.empty()
        }, 100);
      })

      $("#home").on("click", function() {
        // EMPTY AJAX CONTENT //
        window.location.href = "/";
        setTimeout(function() {
          ajaxContainer.empty()
        }, 100);
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



          $("#project-key").html(key)
          $("#title-key").html(titleKey)

          setTimeout(function() {
            // $("#slider-img").fadeOut("slow")

            $("#slider-img").attr('src', "../img/INDEX/"+ cat + "-" + current + ".jpg")

            // $("#slider-img").fadeIn("slow")
          }, 500);




        // console.log($("#slider-image").attr("src"));
      })


    });

  })

  // PROJECTS FROM PROJECTS //

  projectsNavProjects.on("click", function(e) {

    e.preventDefault();

    // ASYNCHRONOUS PROJECTS //
    ajaxContainer.load("../Projects.html #async-content", function(e) {

      $(".nav--right").addClass("from-project")

      for (var i = 0; i < $("img#project-pic").length; i++) {
        // console.log($("img#project-pic").eq(i));
        $("img#project-pic").eq(i).attr('src', "../"+$("img#project-pic").eq(i).attr('data-src'))
      }

      $("#projects-container-async").addClass("from-projects")


      // -------SCROLLING THE PROJECT PAGE-------- //
      let firstSectionTopOffset, secondSectionTopOffset, thirdSectionTopOffset, fourthSectionTopOffset
      let lastScrollTop, st
      let up = 0
      let waitedOnBottom = 0

      // TARGET POSITION OF THE FIRST SECTION IN PROJECT PAGE //
      firstSectionTopOffset = $("#async-content section")[0].offsetTop - $("#async-content")[0].offsetTop - 100
      secondSectionTopOffset = $("#async-content section")[1].offsetTop - $("#async-content")[0].offsetTop - 100
      thirdSectionTopOffset = $("#async-content section")[2].offsetTop - $("#async-content")[0].offsetTop - 100
      fourthSectionTopOffset = $("#async-content section")[3].offsetTop - $("#async-content")[0].offsetTop - 100

      $("#async-content").on('scroll', function(event) {

        if($(this).scrollTop() >= secondSectionTopOffset && $(this).scrollTop() <= thirdSectionTopOffset) {
          $(".projects-category").html("WEB DESIGN AND DEVELOPMENT")
        }
        else if ($(this).scrollTop() >= 0 && $(this).scrollTop() < secondSectionTopOffset ) {
          $(".projects-category").html("EDITORIAL DESIGN")
        }
        else if ($(this).scrollTop() >= thirdSectionTopOffset && $(this).scrollTop() <= fourthSectionTopOffset) {
          $(".projects-category").html("TYPE DESIGN")
        }
        else if ($(this).scrollTop() >= fourthSectionTopOffset && $(this).scrollTop() <= $(this)[0].scrollHeight) {
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
        // console.log($(this));


        //SLIDE IN SECTION WHEN IN VIEWPORT
        let thisEl =  $(this)

        function checkElementLocation() {

          var $window = thisEl;
          var bottom_of_window = thisEl.scrollTop() + thisEl.innerHeight()


          $('.section-to-fade').each(function(i) {
            var $that = $(this);
            var bottom_of_object = $that.position().top;

            //if element is in viewport, add the animate class
            if (bottom_of_window > bottom_of_object) {
              $(this).addClass('fade-in');
            }
          });
        }
        // if in viewport, show the animation
        checkElementLocation();

        // $(window).on('scroll', function() {
        //   checkElementLocation();
        // });



      })

      $("#close").on("click", function() {
        // EMPTY AJAX CONTENT //
        setTimeout(function() {
          ajaxContainer.empty()
        }, 100);
      })

      $("#home").on("click", function() {
        // EMPTY AJAX CONTENT //
        window.location.href = "/";
        setTimeout(function() {
          ajaxContainer.empty()
        }, 100);
      })

    });

  })
})

window.addEventListener('DOMContentLoaded', (event) => {


  // ASYNCHRONOUS CONTENT //
  let ajaxContainer = $("#projects-container-async")

  // NAVIGATION //
  let navProjects = $("#projects")
  let navInfo = $("#info")
  let navIndex = $("#index")




  // ––––––––PROJECTS NAV CLICK HANDLING ––––––––//
  // ––––––––PROJECTS NAV CLICK HANDLING ––––––––//
  // ––––––––PROJECTS NAV CLICK HANDLING ––––––––//
  // ––––––––PROJECTS NAV CLICK HANDLING ––––––––//
  // ––––––––PROJECTS NAV CLICK HANDLING ––––––––//
  // ––––––––PROJECTS NAV CLICK HANDLING ––––––––//
  // ––––––––PROJECTS NAV CLICK HANDLING ––––––––//
  // ––––––––PROJECTS NAV CLICK HANDLING ––––––––//
  // ––––––––PROJECTS NAV CLICK HANDLING ––––––––//
  // ––––––––PROJECTS NAV CLICK HANDLING ––––––––//
  // ––––––––PROJECTS NAV CLICK HANDLING ––––––––//
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

      // $("img").attr('src', )
      setTimeout(function() {
        for (var i = 0; i < $("img").length; i++) {
          $("img").eq(i).attr('src', $("img").eq(i).attr('data-src'))
        }
      },400)


      // -------SCROLLING THE PROJECT PAGE-------- //
      let firstSectionTopOffset, secondSectionTopOffset, thirdSectionTopOffset, fourthSectionTopOffset
      let lastScrollTop, st
      let up = 0
      let waitedOnBottom = 0

      // TARGET POSITION OF THE FIRST SECTION IN PROJECT PAGE //
      firstSectionTopOffset = $("#async-content section")[0].offsetTop - $("#async-content")[0].offsetTop - 200
      secondSectionTopOffset = $("#async-content section")[1].offsetTop - $("#async-content")[0].offsetTop - 200
      thirdSectionTopOffset = $("#async-content section")[2].offsetTop - $("#async-content")[0].offsetTop - 200
      fourthSectionTopOffset = $("#async-content section")[3].offsetTop - $("#async-content")[0].offsetTop - 200

      $("#async-content").on('scroll', function(event) {

        if ($(this).scrollTop() >= secondSectionTopOffset && $(this).scrollTop() <= thirdSectionTopOffset) {
          $(".projects-category").html("WEB DESIGN AND DEVELOPMENT")
        } else if ($(this).scrollTop() <= secondSectionTopOffset ) {
          $(".projects-category").html("EDITORIAL DESIGN")
        } else if ($(this).scrollTop() >= thirdSectionTopOffset && $(this).scrollTop() <= fourthSectionTopOffset) {
          $(".projects-category").html("TYPE DESIGN")
        } else if ($(this).scrollTop() >= fourthSectionTopOffset && $(this).scrollTop() <= $(this)[0].scrollHeight) {
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
        // console.log($(this));


        //SLIDE IN SECTION WHEN IN VIEWPORT
        let thisEl =  $(this)
        function checkElementLocation() {

          var $window = thisEl;
          var bottom_of_window = thisEl.scrollTop() + thisEl.innerHeight()


          $('.section-to-fade').each(function(i) {
            var $that = $(this);
            var bottom_of_object = $that.position().top;

            //if element is in viewport, add the animate class
            if (bottom_of_window > bottom_of_object) {
              $(this).addClass('fade-in');
            }
          });
        }
        // if in viewport, show the animation
        checkElementLocation();

        // $(window).on('scroll', function() {
        //   checkElementLocation();
        // });



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

      // $("img").attr('src', )
      setTimeout(function() {
        for (var i = 0; i < $("img").length; i++) {
          $("img").eq(i).attr('src', $("img").eq(i).attr('data-src'))
        }
      },400)

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


$("document").ready(function(){

  if($("#section-projects")) {
    console.log("what");

    function clearSelection() {
      if(document.selection && document.selection.empty) {
          document.selection.empty();
      } else if(window.getSelection) {
          var sel = window.getSelection();
          sel.removeAllRanges();
      }
    }

    let startWith = 0
    let argument
    let side = "e"

    console.log(side);
    $("#how-many").html($(".full-page-project").length)
    $("#which").html(startWith+1)

    $("#fullPage").on("click", function(e) {
      // console.log(side);

      clearSelection()
      e.preventDefault();

      if(side=="e") {

        if(startWith < $(".full-page-project").length - 2) {
          startWith = startWith + 1
        } else {
          startWith = $(".full-page-project").length -1
        }
        // console.log("right");

      } else if (side=="w") {
        // console.log("left");
        if (startWith == 0) {
          startWith = 0
        } else {
          startWith = startWith - 1
        }
      }

      console.log(startWith);
      // console.log($(".full-page-project").length);
      $(".full-page-project").removeClass("in-view")
      $(".full-page-project").eq(startWith).addClass("in-view")

      $("#how-many").html($(".full-page-project").length)
      $("#which").html(startWith+1)

      // if(!$(".full-page-project p").hasClass("pSlide")) {
      //   $(".full-page-project p").addClass("pSlide")
      // }
      // console.log($(".full-page-project")[1]);

    })

    // RIGHT LEFT CURSOR
    $(window).on('mousemove', function(e){
     var lSide=$(this).width()/2;
     var cursorDirection=e.pageX<lSide ? 'w' : 'e';

     if($("#fullPage:hover").length != 0) {
        $('body').css({"cursor":cursorDirection+"-resize"});
      }

     // console.log(cursorDirection)
     side = cursorDirection
     // passWhichProject(side)
     if($(".nav-elem:hover").length != 0) {
          $('body').css({"cursor":"pointer"});
      } else if ($(".nav--right:hover").length != 0) {
        $('body').css({"cursor":"pointer"});
      } else if ($("#async-content:hover").length != 0) {
        $('body').css({"cursor":"default"});
      } else if ($(".section-project-title:hover").length != 0) {
        $('body').css({"cursor":"default"});
      } else if ($("#projects-container-async:hover").length != 0) {
        $('body').css({"cursor":"default"});
      }
    })



  }







})
