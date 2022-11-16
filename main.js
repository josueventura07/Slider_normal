const btnRight = document.querySelector('.btn_right')
const btnLeft = document.querySelector('.btn_left')
const sliderImg = document.querySelectorAll('.img_slider')
const slider = document.querySelector('.slider')
const info = document.querySelectorAll('.info')
const clock = document.querySelector('.clock')



// sliderImg.forEach((element, i) => {
//     sliderImg[i].addEventListener('click', (e) => {
//           info.forEach((element, i) => {
//             element.classList.remove('info_active')
//           });
//           info[i].classList.add('info_active')
          
//     })
// });

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