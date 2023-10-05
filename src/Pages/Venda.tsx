import React from 'react';
import { useParams } from "react-router-dom"; 
import useFetch from '../Hooks/useFetch';
import { IVenda } from '../Context/DataContext';

const Venda = () => {
  const { id } = useParams();
  const {data, loading} = useFetch<IVenda>(`https://data.origamid.dev/vendas/${id}`)

  if(data === null) return null

  return (
    <div>
      {data.nome}
    </div>
  )
}

export default Venda