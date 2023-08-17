let ReadMore = document.querySelector('.Readmore');
let Services = document.querySelector('.services');
let count = 1;
ReadMore.addEventListener('click',function(){
  count+=1;
  if (count %2==0){
     ReadMore.textContent="Cкрыть все";
     Services.classList.add('openServices');
  }
 else {
  ReadMore.textContent="Показать все";
  Services.classList.remove('openServices');
 }
});



const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
  });
