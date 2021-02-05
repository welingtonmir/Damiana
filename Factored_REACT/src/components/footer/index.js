import '../../views/estilos/footer/Footer.css';
import pagamento from '../../views/estilos/img/formasdepagamento.png';

 export default function Footer(){
  return(
    <footer>
    <h5>Pague usando:</h5>
    <img
      src={pagamento}
      alt="Formas de Pagamento"
    />
    <p>&copy; Welington Miranda</p>
  </footer>
  )
}
