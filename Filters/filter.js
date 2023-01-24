const data = [
  {
    id: 1,
    name: "Invicta Men's Pro Diver",
    img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
    price: 74,
    cat: "Dress",
  },
  {
    id: 11,
    name: "Invicta Men's Pro Diver 2",
    img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
    price: 74,
    cat: "Dress",
  },
  {
    id: 2,
    name: "Timex Men's Expedition Scout ",
    img: "https://m.media-amazon.com/images/I/91WvnZ1g40L._AC_UY879_.jpg",
    price: 40,
    cat: "Sport",
  },
  {
    id: 3,
    name: "Breitling Superocean Heritage",
    img: "https://m.media-amazon.com/images/I/61hGDiWBU8L._AC_UY879_.jpg",
    price: 200,
    cat: "Luxury",
  },
  {
    id: 4,
    name: "Casio Classic Resin Strap ",
    img: "https://m.media-amazon.com/images/I/51Nk5SEBARL._AC_UY879_.jpg",
    price: 16,
    cat: "Sport",
  },
  {
    id: 5,
    name: "Garmin Venu Smartwatch ",
    img: "https://m.media-amazon.com/images/I/51kyjYuOZhL._AC_SL1000_.jpg",
    price: 74,
    cat: "Casual",
  },
];

const search = document.querySelector('.search');
const ImageContainer = document.querySelector('.products');
const categories = document.querySelector('.categories');
const priceRange = document.querySelector('.priceRange');
const priceValue = document.querySelector('.priceValue');


function displayImage( displayImg ) {
  
  ImageContainer.innerHTML = displayImg.map(item => 

    `<div class='product'>
  <img src="${item.img}" alt="">
  <div class="name" >${item.name}</div>
  <div class="price">$${item.price}</div>
  </div>
  `
    ).join('')
  
}

displayImage(data)

search.addEventListener('input', (e) => {

  const displayImg = data.filter( d => {
   return d.name.toLowerCase().includes(e.target.value.toLowerCase())
    
    
  })

  displayImage(displayImg)
})

const addCategories = () => {
  const uniqueCat = ['All',...new Set(data.map(item => {
    return item.cat
  }))]


  categories.innerHTML = uniqueCat.map(item => 
    `
    <span class="cat">${item}</span>
    `
    ).join('')


}

addCategories()

categories.addEventListener('click', (e) => {
  e.target.innerText === 'All' ? displayImage(data) : displayImage(data.filter( item => e.target.innerText === item.cat ))
})

const slider = () => {

  const PriceList = data.map(item => item.price)
    const min = Math.min(...PriceList)
    const max = Math.max(...PriceList)
    priceValue.innerText = '$'+max
    priceRange.setAttribute('min',min)
    priceRange.setAttribute('max',max)
  

  priceRange.addEventListener('input', (e) => {

    priceValue.innerHTML = '$'+e.target.value

    displayImage(data.filter(item => {
      return item.price <= e.target.value
    })  )
  
  })
}

slider()



















