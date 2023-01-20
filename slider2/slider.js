const left = document.querySelector('.left')
const right = document.querySelector('.right')
const slider = document.querySelector('.slider')
const bottom = document.querySelector('.bottom')


let slideNumber = 1;

for ( let i = 0; i < slider.children.length; i++ ) {
  const div = document.createElement('div')
  div.className = `button`
  
  bottom.append(div)
  }
  const button = document.querySelectorAll('.button')

  function colorCircle(){
    [...button].forEach((b,i) => {
      b.style.backgroundColor = ''
     if(slideNumber === i+1){
      b.style.backgroundColor = 'white'
     }
    })
  }

function nextSlide(){ // slides to next image
  slider.style.transform = `translateX(-${slideNumber * 750}px)` 
  
  slideNumber++
  colorCircle()
}

function initialSlide(){ // slides to first image on end of images after clicking right
  slider.style.transform = `translateX(-${0}px)` 
  slideNumber = 1;
  colorCircle()
}

right.addEventListener('click', () => { 
  
  slideNumber < slider.children.length ? nextSlide() : initialSlide()
 
  
})

function finalSlide() { // slides to last image on clicking left at start of images
  console.log(slideNumber)
  slider.style.transform = `translateX(-${750*(slider.children.length-1)}px)` 
  slideNumber = slider.children.length
  colorCircle()
}

function prevSlide(){
  console.log(slideNumber)
  slider.style.transform = `translate(${-750*(slideNumber-2)}px)`;
  slideNumber--
  colorCircle()
}

left.addEventListener('click', () => {
  slideNumber > 1 ? prevSlide() : finalSlide()
  
})




button.forEach((b,i) => {
  
b.addEventListener('click', (e) => {
  
    
    slider.style.transform = `translate(${-750*i}px)`;
    slideNumber = i+1
    colorCircle()
    
  }
)})




colorCircle()