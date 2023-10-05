import React from "react";

//colocamos dentro da chamada da função o que o useFetch irá receber
// T aqui é a interface da data
function useFetch<T>(url: RequestInfo | URL, options?: RequestInit) {
    const [data, setData] = React.useState<T | null>(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState<string | null>(null);

    //foi criado essa const para que o options seja um valor estático
    const optionsRef = React.useRef(options);
    //optionsRef foi definido aqui para que quando houver alguma atualização nas options, o mesmo possa ser atualizado
    optionsRef.current = options;

    //criando o efeito que vai ter como dependência a url, então toda vez que uma url for modificada, esse efeito vai ocorrer
    React.useEffect(() => {
        //criando a função de abortar o fetch onde deseja que ele seja controlado
        const controller = new AbortController();
        const {signal} = controller;

        const fetchData = async () => {
            //quando iniciar o fetch, deica o setLoading como true
            //já o setData, limpa o valor anterior antes de fazer um novo fetch
            setLoading(true);
            setData(null);
            try {
                //contém await, pois é um função assíncrona que recebe os parâmetros que estão na chamada da função do useFetch
                //foi criado essa const para que o options.current seja um valor estático
                const response = await fetch(url, {
                    signal,
                    ...optionsRef.current,
                });
                if(!response.ok) throw new Error(`Error: ${response.status}`);
                const json = (await response.json()) as T;                
                //só verifica o sinal se o json não estiver sido abortado
                if(!signal.aborted ) setData(json);
            } catch (error) {
                if(!signal.aborted && error instanceof Error) setError(error.message);
            } finally {
                if(!signal.aborted ) setLoading(false);
            }
        }
        fetchData();

        return () => {
            controller.abort();
        }
    }, [url]);

    //faz um destruct apenas das variavéis
    return {data, loading, error}
}

export default useFetch