function tocaSom(idElementoAudio){
   const elemento = document.querySelector(idElementoAudio).play();
   if(elemento===null){
    alert('Elemento não encontrado');
   }
   if(elemento != null && elemento.localName==='audio'){
    elemento.play()
   }
}
const listaDeTeclas=document.document.querySelectorAll('.tecla');
     // estrutura de repetiçao- Enquanto 
   for(let contador=0; contador < listaDeTeclas.lenght; contador++){
    const tecla = listaDeTeclas [contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
   
    console.log(idAudio);

    tecla.onclick = function () {
      tocaSom(idAudio);
    };
   tecla.onkeydown=function(evento){
    if(evento.code==='Enter' || evento.code==='Space'){
        tecla.classList.add('ativa');
    };
}
    tecla.onkeydown=function(){
        tecla.classList.remove('ativa');
    }
       console.log(instrumento);
    console.log(contador);
  }