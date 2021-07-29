let counter = 0;
let counter2 = 1;
let exeselec = true;

//usado para pegar todas as "paginas"(seções) para que possam ser retornadas para a posição original mais tarde
const sections = document.querySelectorAll("section");

//detecta o uso da roda do mouse e muda de pagina de acordo com se o valor é negativo ou positivo(a roda do mouse opera em um valor de -100 quando sobe e 100 quando desce)
window.addEventListener("wheel",(e)=>{
  if(e.deltaY > 0){
    counter++;
    counter2++;
  }else{
    counter--;
    counter2--;
  }
  pageController()
  //da update na posição das paginas(seções) para mover elas na viewport
  exeselec && (document.querySelector(`.section-${e.deltaY>0 ? counter : counter2}`).style.left = `${e.deltaY>0 ? "-100vw" : "0"}`)
  console.log(counter,counter2)
})

const pageController = () =>{
  exeselec = true;
  //reseta as paginas de volta a posição original após scrollar na ultima pagina
  if(counter === 5){
    Array.from(sections).forEach(section => {
      section.style.left = '0'
    })
    counter=0;
    counter2=1;
    exeselec = false;
  }
  //solução simples para impedir que o usuario encontre uma pagina nao existente ao tentar scrollar para cima na primeira pagina
  if(counter === -1){
    counter=0;
    counter2=1;
    exeselec = false;
  }
  //esconder o botao de pagina anterior quando na primeira pagina
  if (counter === 0) {
    document.getElementById('page-back').style.display='none';
  }else{
    document.getElementById('page-back').style.display='inline';
  }
  return exeselec;
}

//funcionamento dos botoes
document.querySelector('.page-back').addEventListener('click',()=>{
  counter--;
  counter2--;
  document.querySelector(`.section-${counter2}`).style.left = '0';
  pageController()
})
document.querySelector('.page-next').addEventListener('click',()=>{
  counter++;
  counter2++;
    document.querySelector(`.section-${counter}`).style.left = '-100vw';
    pageController()
})

//verificar se mobile e qual orientaçao para executar pequenos ajustes
if(navigator.userAgent.toLowerCase().match(/mobile/i)) {
  document.getElementById('instructions1id').style.fontSize='medium'
  document.getElementById('instructions2id').style.fontSize='medium'
  document.getElementById('instructions3id').style.fontSize='medium'
  document.getElementById('instructions4id').style.fontSize='medium'
  if (window.matchMedia("(orientation: portrait)").matches) {
    document.getElementById('instructions1id').style.maxHeight='60vh'
    document.getElementById('instructions1id').style.top='25%'
    document.getElementById('instructions2id').style.maxHeight='60vh'
    document.getElementById('instructions2id').style.top='25%'
    document.getElementById('instructions3id').style.maxHeight='60vh'
    document.getElementById('instructions3id').style.top='25%'
    document.getElementById('instructions4id').style.maxHeight='60vh'
    document.getElementById('instructions4id').style.top='25%'
    document.getElementById('ageratingid').style.left='20%'
    document.getElementById('playersid').style.left='80%'
  }

  if (window.matchMedia("(orientation: landscape)").matches) {
  }

}
