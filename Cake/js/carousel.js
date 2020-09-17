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


//REUSE FUNCTION
const moveToSlide=(track,currentSlide,targetSlide)=>{
    track.style.transform =`translateX(-${targetSlide.style.left})`
    currentSlide.classList.remove('current-slide')
    targetSlide.classList.add('current-slide')
}
//WHEN RIGHT BUTTON IS CLICKED
nextButton.addEventListener('click',e=>{
    //MOVE THE SLIDE
    const currentSlide=track.querySelector('.current-slide')
    const nextSlide=currentSlide.nextElementSibling
    moveToSlide(track,currentSlide,nextSlide)
})

prevButton.addEventListener('click',e=>{
    //MOVE THE SLIDE
    const currentSlide=track.querySelector('.current-slide')
    const prevSlide=currentSlide.previousElementSibling
    moveToSlide(track,currentSlide,prevSlide)

})