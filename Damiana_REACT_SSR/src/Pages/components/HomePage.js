import styles from '../asset/estilo.module.css'

export default function HomePage() {
  return (
    <div className={styles.home}>
      <h2 className={styles.h2}>Damiana Biquínis</h2>
      <hr />
      <div className={styles.conteudo}>
        <div className={styles.textoHome}>
          <p>
            A loja virtual com a maior variedade de cores, moldes e tamanhos do
            mercado.
          </p>
          <p>Confira as novidades para o próximo verão.</p>
          <p>Todos os produtos são para pronta entrega.</p>
          <p>Frete Grátis para todo o Brasil.</p>
        </div>
      </div>
    </div>
  );
}
