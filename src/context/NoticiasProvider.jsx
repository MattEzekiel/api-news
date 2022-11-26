import {createContext, useEffect, useState} from "react";
import axios from "axios";

const NoticiasContext = createContext();
function NoticiasProvider({children}) {
    const [categoria, setCategoria] = useState('general');
    const [noticias, setNoticias] = useState([]);
    const [pagina, setPagina] = useState(1);
    const [totalNoticias, setTotalNoticias] = useState(0);

    const consultarApi = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`;

        const { data } = await axios(url);

        setNoticias(data['articles']);
        setTotalNoticias(data['totalResults']);
        setPagina(1);
    }

    const paginarApi = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=ar&page=${pagina}&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`;

        const { data } = await axios(url);

        setNoticias(data['articles']);
        setTotalNoticias(data['totalResults']);
    }

    const handleChangeCategoria = e => {
        setCategoria(e.target.value);
    }

    const handleChangePagina = (e, valor) => {
        setPagina(valor);
        paginarApi();
    }

    useEffect(() => {
        consultarApi();
    }, []);

    return (
        <NoticiasContext.Provider
            value={{
                categoria,
                handleChangeCategoria,
                noticias,
                consultarApi,
                totalNoticias,
                handleChangePagina,
                pagina
            }}
        >
            {children}
        </NoticiasContext.Provider>
    );
}

export {
    NoticiasProvider,
};

export default NoticiasContext;