import React from 'react';
import { useParams } from "react-router-dom"; 
import useFetch from '../Hooks/useFetch';
import { IVenda } from '../Context/DataContext';
import Loading from '../Components/Loading';

//a interface que foi usada aqui é a mesma de IVenda e
//como na api não tem a informação de data, a mesma não vai aparecer na div abaixo, então devemos omitir
type VendaSemData = Omit<IVenda, 'data'>;

const Venda = () => {
  const { id } = useParams();
  const {data, loading} = useFetch<VendaSemData>(`https://data.origamid.dev/vendas/${id}`,
  );
  //o primeiro if vem do componente de Loading
  if(loading === true ) return <Loading />
  if(data === null) return null

  return (
    <div>
      <div className='box mb'>ID: {data.id}</div>
      <div className='box mb'>Nome: {data.nome}</div>
      <div className='box mb'>Preço: {data.preco.toLocaleString('pt-br', {
        style: "currency", 
        currency: "BRL",
        })}
        </div>
        <div className='box mb'>Status: {data.status}</div>
        <div className='box mb'>Pagamento: {data.pagamento}</div>
    </div>
  )
}

export default Venda