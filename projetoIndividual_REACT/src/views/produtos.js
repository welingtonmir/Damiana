import { useState, useEffect} from 'react';

import Produto from '../componente/Produto';

export default function Produtos(){
    const [ produtos, setProdutos] = useState([]);
    useEffect(() => {
        async function showProdutos() {
            const url = "http://localhost/Damiana/projetoIndividual_PHP/api/produtosbd.php";
            const resposta = await fetch(url);
            const resultado = await resposta.json();
            console.log(resultado);
        }
        showProdutos();
    });

    return(
            <Produto imagem="foto_nao_disponivel.gif" nome="Biquíni" preconormal="39,90" precovenda="19,90" categoria="Cavado"/>

    )
}