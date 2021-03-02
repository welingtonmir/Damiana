//chamando a lista de produtos 
import produtos from "../../produtos";

//variável com valor inicial ...herdando a lista de produtos 
const initialState = [...produtos];

//função que retorna um estado inicial da lista de produtos
export default (state = initialState, action) => {
  return state;
};
