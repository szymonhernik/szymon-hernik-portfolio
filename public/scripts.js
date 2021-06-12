window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');

  // ABOUT BUTTON SHOW AND CLOSE //
  // ABOUT BUTTON SHOW AND CLOSE //

  let aboutButton = document.getElementById("about-switch")
  let aboutSection = document.getElementById("about-section")
  let closeAbout = document.getElementById("about-close")
  let aboutRight = document.querySelector(".about_right")
  let documentPage = document.getElementById("document")
  let nav = document.querySelector("nav")
  let main = document.querySelector("main")

  let drawings = document.querySelectorAll(".hi-2-u")
  let drawingFace = document.querySelector(".hi-2-u-left")

  document.querySelectorAll(".hi-2-u-right").forEach((drawing) => {

    aboutButton.addEventListener("mouseover", function(event) {
      drawing.classList.add("in_view")
      nav.classList.add("cover-page")
      main.classList.add("cover-page-main")
      drawingFace.classList.add("hi-2-u-left-higher")
      documentPage.classList.add("document_covered")
      aboutRight.classList.add("about_right_open")
    }, false)
    closeAbout.addEventListener("click", function(event) {
      drawing.classList.remove("in_view")
      nav.classList.remove("cover-page")
      main.classList.remove("cover-page-main")
      drawingFace.classList.remove("hi-2-u-left-higher")
      documentPage.classList.remove("document_covered")
      aboutRight.classList.remove("about_right_open")



    }, false)
  })

  aboutButton.addEventListener("mouseover", function(event) {
    aboutSection.classList.add("in_view")
    nav.classList.add("cover-page")
    main.classList.add("cover-page-main")
    documentPage.classList.add("document_covered")
    aboutRight.classList.add("about_right_open")
  }, false)

  closeAbout.addEventListener("click", function(event) {
    aboutSection.classList.remove("in_view")
    nav.classList.remove("cover-page")
    main.classList.remove("cover-page-main")
    documentPage.classList.remove("document_covered")
    aboutRight.classList.remove("about_right_open")

  }, false)



  // END OF ABOUT BUTTON SHOW AND CLOSE //
  // END OF ABOUT BUTTON SHOW AND CLOSE //

  function goBack() {
    window.history.back();
  }
  if(document.getElementById("back")) {
    document.getElementById("back").addEventListener("click", goBack, false)
  }





});





// –––––UNUSED–––––––––UNUSED–––––––––––––UNUSED––––//
// –––––UNUSED–––––––––UNUSED–––––––––––––UNUSED––––//
// –––––UNUSED–––––––––UNUSED–––––––––––––UNUSED––––//
// –––––UNUSED–––––––––UNUSED–––––––––––––UNUSED––––//
// –––––UNUSED–––––––––UNUSED–––––––––––––UNUSED––––//
// –––––UNUSED–––––––––UNUSED–––––––––––––UNUSED––––//
// –––––UNUSED–––––––––UNUSED–––––––––––––UNUSED––––//
// –––––UNUSED–––––––––UNUSED–––––––––––––UNUSED––––//
// –––––UNUSED–––––––––UNUSED–––––––––––––UNUSED––––//



// ––––––––––––––SLIDER–––––––––––––––––//
// ––––––––––––––SLIDER–––––––––––––––––//
// ––––––––––––––SLIDER–––––––––––––––––//
// let max = 'next';
//
// document.querySelectorAll("#content").forEach((container) => {
//   let el = container;
//   let list = el.getElementsByTagName('li')
//   let numbering = el.querySelector('span')
//
//
//
//   container.addEventListener('click', () => {
//
//     // console.log(numbering.innerHTML)
//
//     for (i = 0; i < list.length; i++) {
//
//       let liste_classe = list[i].classList;
//
//       for (j = 0; j < list.length; j++) {
//         if (liste_classe[j] === "active") {
//           var index_active = list[i],
//             index_future;
//
//           if (max === 'next') {
//             if (i + 1 !== list.length) {
//               numbering.innerHTML = i + 2;
//               index_future = list[i + 1];
//
//             } else {
//               index_future = list[0];
//               max = 'prev';
//               numbering.innerHTML = 1;
//             }
//           } else if (max === 'prev') {
//             if (i - 1 >= 0) {
//               index_future = list[i - 1];
//               numbering.innerHTML = i + 2;
//
//             } else {
//               index_future = list[i + 1];
//               max = 'next';
//               numbering.innerHTML = i + 2;
//             }
//           }
//
//         }
//       }
//     }
//
//     index_active.classList.remove('active');
//     index_future.classList.add('active');
//
//     console.log(list)
//
//   });
// });
// ––––––––––––––SLIDER END–––––––––––––––––//
// ––––––––––––––SLIDER END–––––––––––––––––//
// ––––––––––––––SLIDER END–––––––––––––––––//
