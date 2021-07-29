$( document ).ready(function() {
    $('.carousel').carousel({
        interval : false,

    })
});

window.addEventListener("wheel",(e)=>{
  if(e.deltaY > 0){
    $('.carousel').carousel('next')
  }else{
    $('.carousel').carousel('prev')
  }
})
