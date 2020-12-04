import '../componente/home/home.css'
import {Row, Carousel, Image} from 'react-bootstrap';
import carrousel4 from '../componente/home/img/carrousel4.jpg';
import carrousel5 from '../componente/home/img/carrousel5.jpg';
import carrousel6 from '../componente/home/img/carrousel6.jpg';
import 'bootstrap/dist/css/bootstrap.css'

export default function home(){
    return(
        <div >
        <header>
            <h2>Damiana Biquínis</h2>
        </header>
        <hr />
        <main>
            <Row className="my-1">
            <Carousel>
                <Carousel.Item>
                    <Image src={carrousel4} alt="primeiro slide" fluid />
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={carrousel5} alt="segundo slide" fluid />
                    <Carousel.Caption>
                    <h3>Verão Black</h3>
                    <p>Descontos especiais durante todo o período do verão</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={carrousel6} alt="terceiro slide" fluid />
                    <Carousel.Caption>
                    <h3>Conheça nossos novos produtos</h3>
                    <p>Aceitamos todos os cartões</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </Row>
            <div id="textoHome">
                <p>A loja virtual com a maior variedade de cores, moldes e tamanhos do mercado.</p>
                <p>Confira as novidades para o próximo verão.</p>
                <p>Todos os produtos são para pronta entrega.</p>
                <p>Frete Grátis para todo o Brasil.</p>
            </div>
        </main>
   </div>
    )
}