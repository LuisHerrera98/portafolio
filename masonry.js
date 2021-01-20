window.addEventListener('load',function(){
  
  var elem = document.querySelector('.caja-productos');
  elem.style.display='block'
  var masonry = new Masonry( elem, {
  // options
  itemSelector: '.caja-producto',
});
})
