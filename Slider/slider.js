const left = document.querySelector('.left');
const right = document.querySelector('.right')
const slider = document.querySelector('.slider')
const bottom = document.querySelector('.bottom')

var slideNumber=1
const numOfImages = slider.children.length;


function nextSlide(){

  slider.style.transform = `translateX(${slideNumber*(-350)}px)`
  slideNumber++
  current_slide_circle()
  
}

function initialSlide(){
  slider.style.transform = `translateX(${0*(-350)}px)`
  slideNumber=1
  current_slide_circle()
}

function prevSlide(){
 
  slider.style.transform = `translateX(${slideNumber*(-350)+350*2}px)`
  slideNumber--
  
  current_slide_circle()
  
}

function finalSlide(){
  slider.style.transform = `translateX(${numOfImages*(-350)+350}px)`
  slideNumber=numOfImages
  current_slide_circle()
}

right.addEventListener("click",() => {
  const temp = slideNumber
  temp<numOfImages ? nextSlide():initialSlide();
  
  
})

left.addEventListener('click', () => {
  slideNumber === 1 ? finalSlide():prevSlide();
 
  
})

for(let i = 0 ;i<numOfImages;i++){
          const div = document.createElement('div');
          div.className = 'button';
          bottom.appendChild(div);

}

const buttons = document.querySelectorAll('.button')
current_slide_circle()



function current_slide_circle(){
  
 buttons.forEach((b,i) => {
  
  if (i === slideNumber-1) {
  b.style.backgroundColor = 'white';
  
  }
  else
  {
    b.style.backgroundColor = null;
  }
 }) 
}

buttons.forEach((b,i) => {
  b.addEventListener('click', () => {
    slider.style.transform = `translateX(${i*(-350)}px)`
    slideNumber = i+1
    console.log(i+1)
    console.log(slideNumber)
    current_slide_circle()
  })
 }) 









