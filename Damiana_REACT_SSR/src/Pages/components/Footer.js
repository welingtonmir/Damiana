import styles from '../asset/estilo.module.css'

export default function Footer() {
  return (
    <div className={styles.footer}>
      <h5 className={styles.h5}>Pague usando:</h5>
      <img
        src="#"
        alt="Formas de Pagamento"
        className={styles.img}
      />
      <p>&copy; Welington Miranda</p>
    </div>
  );
}
