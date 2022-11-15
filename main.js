const btnRight = document.querySelector('.btn_right')
const btnLeft = document.querySelector('.btn_left')
const sliderImg = document.querySelectorAll('.img_slider')
const slider = document.querySelector('.slider')


function crearContador() {
   
  let contador = 0;

   
  }

  let count = 0

btnRight.addEventListener('click', () => {
  
    if(count < sliderImg.length - 1) {
      count++
    } else {
      count = 0
    }

    let operation = count * -25

    slider.style.transform = `translateX(${operation}%)`
   
  })

  btnLeft.addEventListener('click', () => {
  
    if(count < 1) {
      count = sliderImg.length - 1
    } else {
      count--
    }
    let operation = count * -25

    slider.style.transform = `translateX(${operation}%)`
    
  })