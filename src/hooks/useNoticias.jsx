import {useContext} from 'react';
import NoticiasContext from "../context/NoticiasProvider.jsx";

const useNoticias = () => {
    return useContext(NoticiasContext);
};

export default useNoticias;