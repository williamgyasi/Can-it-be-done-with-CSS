// $(() => {
//     let stickyTop = 0,
//     scrollTarget = false;
  
//     let timeline = $('.timeline__nav'),
//     items = $('li', timeline),
//     milestones = $('.timeline__section .small-img'),
//     offsetTop = parseInt(timeline.css('top'));
  
//     const TIMELINE_VALUES = {
//       start: 190,
//       step: 30 
//     };
  
  
//     // $(".timeline__section").resize(function () {
//     //   timeline.removeClass('fixed');
  
//     //   stickyTop = timeline.offset().top - offsetTop;
  
//     //   $(".timeline__section").trigger('scroll');
//     // })
//     // .trigger('resize');
  
//     // $(".timeline__section").scroll(function () {
//     //     alert("add")
//     //   if ($(".timeline__section").scrollLeft() > stickyTop) {
//     // //     timeline.addClass('fixed');
//     // //   } else {
//     // //     timeline.removeClass('fixed');
//     // //   }
//     // })
//     // .trigger('scroll');
  
//     items.find('span').click(function () {
//       let li = $(this).parent(),
//       index = li.index(),
//       milestone = milestones.eq(index);

//       if (!li.hasClass('active') && milestone.length) {
//         scrollTarget = index;
  
//         let scrollTargetTop = milestone.offset().top - 80;
  
//         $('html, body').animate({ scrollTop: scrollTargetTop }, {
//           duration: 400,
//           complete: function complete() {
//             scrollTarget = false;
//           } });
  
//       }
//     });
  
//     $(".timeline__section").scroll(function () {
//       let viewLine = $(".timeline__section").scrollLeft()+ $(".timeline__section").height() / 3,
//       active = -1;
  
//       if (scrollTarget === false) {
//         milestones.each(function () {
//           if ($(this).offset().top - viewLine > 0) {
//             return false;
//           }
  
//           active++;
//         });
//       } else {
//         active = scrollTarget;
//       }
  
//       timeline.css('left', -1 * active * TIMELINE_VALUES.step + TIMELINE_VALUES.start + 'px');
  
//       items.filter('.active').removeClass('active');
  
//       items.eq(active != -1 ? active : 0).addClass('active');
//     })
//     .trigger('scroll');
//   });

var expandDiv = document.getElementById("expand");
var speed = 4;

function expanding() {
  var scrolltop = window.pageYOffset; // get number of pixels document has scrolled vertically
  var scrollAndSpeed = (scrolltop / speed);
  //Expand using transform
  //expandDiv.style.transform = "scalex( " + Math.min(Math.max(scrollAndSpeed, 1), 10) + ")";
  
  //Or using width
  expandDiv.style.width = Math.min(Math.max(scrollAndSpeed, 20), 95) + "%";

}

window.addEventListener('scroll', function() { // on page scroll
  requestAnimationFrame(expanding); // call parallaxing()
}, false);