const smallPicWrapper=document.querySelector('.wrapper')
const smallPics=Array.from(smallPicWrapper.children)
console.log(smallPics)
$(document).ready(function(){
    

//     $('.aos-1').waypoint(function(direction){
//         $('.aos-1').addClass('animate__animated animate__slideInRight')

// },{
//     offset:'40%'
// })

// $('.aos-2').waypoint(function(direction){
//     $('.aos-2').addClass('animate__animated animate__slideInRight animate__delay-1s')

// },{
// offset:'40%'
// })
// $('.aos-3').waypoint(function(direction){
//     $('.aos-3').addClass('animate__animated animate__slideInRight animate__delay-1.4s')

// },{
// offset:'40%'
// })
// $('.aos-4').waypoint(function(direction){
//     $('.aos-4').addClass('animate__animated animate__slideInRight animate__delay-1.7s')

// },{
// offset:'40%'
// })
// $('.aos-5').waypoint(function(direction){
//     $('.aos-5').addClass('animate__animated animate__slideInRight animate__delay-2.1s')

// },{
// offset:'40%'
// })

$('.side-box h2').waypoint(function(direction){
    $('.side-box h2').addClass('animate__animated animate__bounce animate__delay-1s')

},{
offset:'50%'
})




// $('.aos-5').waypoint(function(direction){
//     $('.aos-5').addClass('animate__animated animate__slideInRight animate__delay-2.1s')

// },{
// offset:'40%'
// })

})