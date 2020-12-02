function exibirCategoria(categoria) {
//pega os elementos que tem a classe box_produtos
  let elementos = document.getElementsByClassName("box_produtos");
 
//verifica a quantidade de elementos existentes na variável elementos 
  for (let i = 0; i < elementos.length; i++) {
    if (categoria == elementos[i].id)
     elementos[i].style = "display:inline-block";
    else
     elementos[i].style = "display:none";
  }
}

let exibirTodos = () => {
  let elementos = document.getElementsByClassName("box_produtos");
  for (let i = 0; i < elementos.length; i++) 
    elementos[i].style = "display:inline-block";  
}

function destaque(imagem){
let {width} = foto.style;
  if(width =="120px") 
    imagem.style.width = "240px";
  else 
    imagem.style.width = "120px";
}


 
