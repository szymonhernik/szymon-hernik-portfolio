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

      $("#async-content").addClass("animate-in")




      $("#home").on("click", function() {
        // window.history.pushState('page1', 'Title', '/');
        $("main").addClass("animate-down")
        $("main").removeClass("animate-up")


        $("#async-content").addClass("animate-out")

        $(".overlay").removeClass("overlay--active")
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
