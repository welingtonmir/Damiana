import styles from '../asset/estilo.module.css'

export default function Menu() {
  return (
    <div>
      <nav id="menu" 
      className={styles.nav}>
        <a className={styles.a} href="#" id="logo">
          <img className={styles.logo}src="#" alt="logo" />
        </a>
        <a className={styles.a} href="#">Produtos</a>
        <a className={styles.a} href="#">Lojas</a>
        <a className={styles.a} href="#">Contatos</a>
      </nav>
    </div>
  );
}
