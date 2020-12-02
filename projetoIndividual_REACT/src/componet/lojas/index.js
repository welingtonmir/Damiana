import './lojas.css'

export default function lojas(props){
    return(
        <div>
            <header>
                <h2>Nossas Lojas</h2>
            </header>
            <hr />
            <main id="conteudo">
                <section id="lojas">
                    <div class="caixasDivisao">
                        <div>
                            <img class="imagem_produto" src={require(`./img/foto_nao_disponivel.gif`).default} alt="Foto Loja Rio de Janeiro"/>
                            <h4>Rua: Farme de Amoedo n°53 , Ipanema - RJ</h4>
                        </div>
                        <hr />
                        <div>
                            <img class="imagem_produto" src={require(`./img/foto_nao_disponivel.gif`).default} alt="Foto Loja São Paulo"/>
                            <h4>Av. Paulista, 2181 - Consolação, São Paulo - SP</h4>
                        </div>
                    </div>
                    <hr />
                    <div class="caixasDivisao">
                        <div>
                            <img class="imagem_produto" src={require(`./img/foto_nao_disponivel.gif`).default} alt="Foto Loja Santa Catarina" />
                            <h4>Alameda César Nascimento, 646 - Jurerê, Florianópolis - SC</h4>
                        </div>
                        <hr />
                        <div>
                            <img class="imagem_produto" src={require(`./img/foto_nao_disponivel.gif`).default} alt="Foto Loja Belo Horizonte"/>
                            <h4>BR-356, 3049 - Belvedere, Belo Horizonte - MG</h4>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}