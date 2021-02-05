import "./estilos/contatos/contatos.css";
import iconeZap from "./estilos/img/iconeZap.png";
import iconeEmail from "./estilos/img/iconeEmail.png";

export default function contato() {
  return (
    <div>
      <header>
        <h2>Contatos</h2>
      </header>
      <hr />
      <div id="contatos">
        <div>
          <img src={iconeZap} alt="Ícone WhatsApp" />
          <label>(021)9999-9999</label>
        </div>
        <div>
          <img src={iconeEmail} alt="Ícone Email" />
          <label>Email: welingtonmiranda20@gmail.com</label>
        </div>
      </div>
    </div>
  );
}
