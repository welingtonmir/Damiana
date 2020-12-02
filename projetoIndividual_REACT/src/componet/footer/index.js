import './Footer.css';

 function Footer(){
  return(
    <footer>
    <h5>Pague usando:</h5>
    <img
      src={require(`./img/formasdepagamento.png`).default}
      alt="Formas de Pagamento"
    />
    <p>&copy; Welington Miranda</p>
  </footer>
  )
}

export default Footer