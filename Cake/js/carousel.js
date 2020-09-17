const track=document.querySelector(".carousel_track")
const slides=Array.from(track.children)

const nextButton=document.querySelector(".next")
const prevButton=document.querySelector(".prev")

const dotsNavs=document.querySelector(".carousel_nav")
const dots=Array.from(dotsNavs.children)


const slideWidth=slides[0].getBoundingClientRect().width;
// console.log(slideSize)

//ARRANGE SLIDES NEXTS TO EACH OTHER
const setSlidePosition=(slide,index)=>{
    slide.style.left=`${slideWidth * index}px`
}
slides.forEach(setSlidePosition)