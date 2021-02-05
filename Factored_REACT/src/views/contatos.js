import "./estilos/contatos/contatos.css";
import iconeZap from "./estilos/img/iconeZap.png";
import iconeEmail from "./estilos/img/iconeEmail.png";
//import { useState } from 'react';


export default function contato() {
  /*
  const [form, setForm] = useState({
    nome:'',
    email: '',
    assunto:'',
    mensagem:'',
  })
  const [response, setResponse] = useState(null);

  const controleMudanca = ({target}) => {
    EventSource.preventDefalt();
    const url = "http://localhost:1910/mensagem";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }).then((res) => {
        setResponse(res);
    });
    alert("Mesangem salva!");
    props.history.push('/');
  }
*/

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
