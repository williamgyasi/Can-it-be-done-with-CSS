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

const updateDot=(currentDot,targetDot)=>{
    
    currentDot.classList.remove('current-slide')
    targetDot.classList.add ('current-slide')

}

const hideShowArrows =(slides,prevButton,nextButton,targetIndex)=>{
    if(targetIndex===0){
        prevButton.classList.add('is-hidden')
        nextButton.classList.remove('is-hidden')
    }
    else if(targetIndex===slides.length-1){
        prevButton.classList.remove('is-hidden')
        nextButton.classList.add('is-hidden')
    }
    else{
        prevButton.classList.remove('is-hidden')
        nextButton.classList.remove('is-hidden')
    }

}
//WHEN RIGHT BUTTON IS CLICKED
nextButton.addEventListener('click',e=>{
    //MOVE THE SLIDE
    const currentSlide=track.querySelector('.current-slide')
    const nextSlide=currentSlide.nextElementSibling
    const currentDot = dotsNavs.querySelector('.current-slide')
    const nextDot=currentDot.nextElementSibling

    const nextIndex=slides.findIndex(slide=>slide===nextSlide)


    moveToSlide(track,currentSlide,nextSlide)
    updateDot(currentDot,nextDot) 

    hideShowArrows(slides,prevButton,nextButton,nextIndex)


})

prevButton.addEventListener('click',e=>{
    //MOVE THE SLIDE
    const currentSlide=track.querySelector('.current-slide')
    const prevSlide=currentSlide.previousElementSibling
    const currentDot = dotsNavs.querySelector('.current-slide')
    const previosDot=currentDot.previousElementSibling
    
    const nextIndex=slides.findIndex(slide=>slide===prevSlide)

    


    moveToSlide(track,currentSlide,prevSlide)
    updateDot(currentDot,previosDot) 

    hideShowArrows(slides,prevButton,nextButton,nextIndex)


})

dotsNavs.addEventListener('click',event=>{
    //WHAT INIDCATOR WAS CLICKED
    const targetDot =event.target.closest('button')
    if(!targetDot) return;

    const currentSlide =track.querySelector('.current-slide')
    const currentDot = dotsNavs.querySelector('.current- slide')

    const targetIndex=dots.findIndex(element=>element===targetDot)

    const targetSlide =slides[targetIndex]

    moveToSlide(track,currentSlide,targetSlide)

    updateDot(currentDot,targetDot)

    hideShowArrows(slides,prevButton,nextButton,targetIndex)

    

    
})