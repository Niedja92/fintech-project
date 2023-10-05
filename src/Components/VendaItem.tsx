import { NavLink } from "react-router-dom"; 
import { IVenda } from '../Context/DataContext'

//VendaItem recebe uma propriedade do tipo venda
const VendaItem = ({venda}: {venda: IVenda}) => {
  return (
    <div className='venda box'>
        <NavLink to={`/vendas/${venda.id}`} style={{fontFamily: "monospace"}}>
            {venda.id}
        </NavLink>
        <div>{venda.nome}</div>
        <div>
            {venda.preco.toLocaleString('pt-br', {
                style: 'currency', 
                currency: 'BRL',
            })}
        </div>
    </div>
  )
}

export default VendaItem