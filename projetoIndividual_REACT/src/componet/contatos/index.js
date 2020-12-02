
 import './contatos.css'

 export default function Contato(){
  return(
    <div>
        <header>
            <h2>Contatos</h2>
        </header>
        <hr />
        <div id="contatos">
            <div>
                <img src={require(`./img/iconeZap.png`).default} alt="Ícone WhatsApp" />
                <label>(021)9999-9999</label>
            </div>
            <div>
                <img src={require(`./img/iconeEmail.png`).default} alt="Ícone Email" />
                <label>Email: welingtonmiranda20@gmail.com</label>
            </div>   
        </div>
    </div>
    
  )
}