/*export default function Produtos(){
    const [ produtos, setProdutos] = useState([]);
    useEffect(() => {
        async function showProdutos() {
            const url = "http://localhost/Damiana/projetoIndividual_PHP/api/produtosbd.php";
            const resposta = await fetch(url);
            const resultado = await resposta.json();
            setProdutos(resultado);
        }
        showProdutos();
    });

    return(
        <div>
                    {produtos && produtos.map( ({  categoria  }) => (
                     exibirCategoria(categoria) {
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
                        
                         destaque(imagem_produto){
                        let {width} = foto.style;
                          if(width =="120px") 
                            imagem.style.width = "240px";
                          else 
                            imagem.style.width = "120px";
                        }
                        )
                    )}
        </div>
    )
}*/

    
    
     