window.addEventListener('DOMContentLoaded', (event) => {


  // ASYNCHRONOUS CONTENT //
  let ajaxContainer = $( "#projects-container-async" )

  // NAVIGATION //
  let navProjects = $( "#projects" )
  let navInfo = $( "#info" )
  let navIndex = $( "#index" )


  // ––––––––NAVIGATION CLICK HANDLING ––––––––//

  navProjects.on("click", function(e) {

    e.preventDefault();


    // window.history.pushState('page2', 'Title', '/Projects');


    // ASYNCHRONOUS //
    ajaxContainer.load( "Projects.html #async-content", function (e) {
      $("main").addClass("animate-up")
      $("main").removeClass("animate-down")

      $(".overlay").addClass("overlay--active")
      $(".overlay").removeClass("overlay--disactivate")

      $(".async-container").addClass("animate-in")
      $(".nav-projects").addClass("animate-in")

      $(".project-overlay").removeClass("project-overlay--activated")


      let firstSectionTopOffset
      let lastScrollTop, st
      let up = 0


      $( "#async-content").on('scroll', function(event) {

        firstSectionTopOffset = $("#async-content section")[0].offsetTop - $("#async-content")[0].offsetTop -20



        st = $(this).scrollTop();
        if (st >= lastScrollTop){
            // console.log("down");
            up = 0
            if ($(this).scrollTop() >= firstSectionTopOffset) {
              $(".nav-projects").addClass("projectsMenu")
              $(".nav-projects").removeClass("projectsMenu-down")
            }
        } else {
          // console.log("up");

          if ($(this).scrollTop() >= firstSectionTopOffset) {
            if(up==0) {
              $(".nav-projects").removeClass("projectsMenu")
              $(".nav-projects").addClass("projectsMenu-down")
              up = 1
            }
          }
        }
        lastScrollTop = st;

      })


      $("#home").on("click", function() {
        // window.history.pushState('page1', 'Title', '/');
        $("main").addClass("animate-down")
        $("main").removeClass("animate-up")



        // $(".overlay").removeClass("overlay--active")
        $(".project-overlay").addClass("project-overlay--activated")

        // $(".overlay").addClass("overlay--disactivate")


        setTimeout( function()
          {
            ajaxContainer.empty()
          }, 500);

      })
    } );

  })

  navInfo.on("click", function(e) {

    e.preventDefault();

    // ASYNCHRONOUS //
    ajaxContainer.load( "Info.html #async-content", function (e) {
      $("#async-content").addClass("animate-in")

      $("#home").on("click", function() {
        $("#async-content").addClass("animate-out")

        setTimeout( function()
          {
            ajaxContainer.empty()
          }, 500);
      })
    } );

  })

  // ––––––––END OF NAVIGATION CLICK HANDLING ––––––––//

});




// SCROLLING //
window.addEventListener('DOMContentLoaded', (e) => {


  $( "#async-content").on('scroll', function(event) {
    console.log("jeeeez");
    // if ($(this).scrollTop() >= $('#theTarget').position().top) {
    //   console.log('I have been reached');
    // }
  })

});
