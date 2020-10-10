const portfolioItems
 = document.querySelectorAll
 ('.portfolio-item-wrapper');
portfolioItems.forEach(item => {
  item.addEventListener('mouseover', ()=> {
  item.childNodes[1].classList.add('img-darken');
  })
})

portfolioItems.forEach(item => {
  item.addEventListener('mouseout', ()=> {
  item.childNodes[1].classList.remove('img-darken');
  })
})
