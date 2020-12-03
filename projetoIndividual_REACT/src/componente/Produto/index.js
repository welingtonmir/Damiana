import './produto.css'
import {Container, Row, Col} from 'react-bootstrap';


export default function Produto(props){
    return(
      <div>
        <header>
          <h2>Nossos Produtos</h2>
        </header>
        <hr />
        <main id='main'>
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
          <Container>
            <Row>
              <Col>
              <section class="produtos">
            <div class="box_produtos" className={props.categoria}>
              <img id="imagem_produto" src={require(`./img/${props.imagem}`).default} />
              <p>
                {props.nome}
              </p>
              <p class="precoOriginal">R${props.preconormal}</p>
              <p class="precoVenda">R${props.precovenda}</p>
            </div>
          </section>
              </Col>
            </Row>
            
          </Container>
          
        </main>
      </div>
    );
}