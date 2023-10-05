import React from 'react'
import { useData } from '../Context/DataContext';

const style: React.CSSProperties = {
    padding: "var(--gap) var(--gap-s)",
    backgroundColor: "var(--color-3)",
    border: "none",
    borderRadius: "var(--gap)",
    color: "var(--color-2)",
    fontWeight: "600",
    textTransform: "capitalize",
}

function nomeMes(n: number) {
    const date = new Date();
    //puxar as informações de 90 dias atrás
    date.setMonth(date.getMonth() + n)
    //puxar o nome do mês em português
    return new Intl.DateTimeFormat('pt-BR', {month: "long"}).format(date);
}

function formatDate(date: Date) {
    const dd = String(date.getDate()).padStart(2, "0");
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const yyyy = date.getFullYear();
    return `${yyyy}-${mm}-${dd}`;
} 

// n:0 = mês atual n: -1 é o mês anterior
const MesBtn = ({ n }: { n: number} ) => {
    const { setInicio, setFinal } = useData(); //exportadas do Contexto

    //função criada para executar o evento ao clicar no botão
    function setMes(n: number) {
        const date = new Date();
        date.setMonth(date.getMonth() + n);
        
        //primeiro dia do mês
        const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
        //último dia do mês
        const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        setInicio(formatDate(firstDay));
        setFinal(formatDate(lastDay));
    }
    
    return <button  style={style} onClick={() => setMes(n)}>{nomeMes(n)}</button>;  
}

export default MesBtn;