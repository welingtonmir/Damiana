
import '../funcoes/funcoes.js'
export default function Categoria(){
    return(
        <section class="categorias">
            <h3>Categorias</h3>
            <ol>
              <li onclick="exibirTodos()">Todos</li>
              <li onclick="exibirCategoria('croche')">Biquíni Crochê</li>
              <li onclick="exibirCategoria('cinturaAlta')">Biquíni Cintura Alta</li>
              <li onclick="exibirCategoria('fioDental')">Biquíni Fio Dental</li>
              <li onclick="exibirCategoria('cavado')">Biquíni Cavado</li>
              <li onclick="exibirCategoria('cortininha')">Biquíni Cortininha</li>
              <li onclick="exibirCategoria('tomaraQueCaia')">Biquíni Tomara-que-caia</li>
              <li onclick="exibirCategoria('babado')">Biquíni Babado</li>
            </ol>
          </section> 
    );
}