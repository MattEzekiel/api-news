import {FormControl, InputLabel, Select, MenuItem, Button, Box} from "@mui/material";
import useNoticias from "../hooks/useNoticias.jsx";

const CATEGORIAS = [
    { value: 'general', label: 'General'},
    { value: 'business', label: 'Negocios'},
    { value: 'entertainment', label: 'Entretenimiento'},
    { value: 'health', label: 'Salud'},
    { value: 'science', label: 'Ciencia'},
    { value: 'sports', label: 'Deportes'},
    { value: 'technology', label: 'Tecnología'},
]
function Formulario() {
    const { categoria, handleChangeCategoria, consultarApi } = useNoticias();

    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                consultarApi();
            }}
        >
            <FormControl fullWidth>
                <InputLabel>Categoría</InputLabel>
                <Select
                    label={"categoria"}
                    onChange={handleChangeCategoria}
                    value={categoria}
                >
                    {CATEGORIAS.map(categoria => (
                        <MenuItem
                            key={categoria.value}
                            value={categoria.value}
                        >
                            {categoria.label}
                        </MenuItem>
                    ))}
                </Select>
                <Box sx={{marginTop: "1rem"}}>
                    <Button
                        fullWidth
                        variant={'contained'}
                        color={"primary"}
                        type={"submit"}
                    >
                        Buscar Noticias
                    </Button>
                </Box>
            </FormControl>
        </form>
    );
}

export default Formulario;