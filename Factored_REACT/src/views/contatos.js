import '../componente/contatos/contatos.css';

export default function contato(){
    return(
        <div>
        <header>
            <h2>Contatos</h2>
        </header>
        <hr />
        <div id="contatos">
            <div>
                <img src={require(`../componente/contatos/img/iconeZap.png`).default} alt="Ícone WhatsApp" />
                <label>(021)9999-9999</label>
            </div>
            <div>
                <img src={require(`../componente/contatos/img/iconeEmail.png`).default} alt="Ícone Email" />
                <label>Email: welingtonmiranda20@gmail.com</label>
            </div>   
        </div>
    </div>
    )
}