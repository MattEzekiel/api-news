import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function Noticia({noticia}) {
    const { urlToImage, url, title, description, source } = noticia;

    return (
        <Grid
            item
            md={6}
            lg={4}
        >
            <Card>
                { urlToImage && (
                    <CardMedia
                        component={"img"}
                        alt={`Imagen de la noticia ${title}`}
                        image={urlToImage}
                        height={250}
                    />
                ) }
                <CardContent>
                    <Typography variant={"body1"} color={"error"}>
                        { source.name }
                    </Typography>
                    <Typography variant={"h5"} component={"h3"}>
                        { title }
                    </Typography>
                    <Typography variant={"body2"} marginTop={"1rem"}>
                        { description }
                    </Typography>
                    <CardActions>
                        <Link
                            href={url}
                            target={"_blank"}
                            variant={"button"}
                            color={"primary"}
                            marginTop={"1rem"}
                            width={"100%"}
                            textAlign={"center"}
                            sx={{
                                textDecoration: 'none'
                            }}
                        >
                            Leer Noticia
                        </Link>
                    </CardActions>
                </CardContent>
            </Card>
        </Grid>
    );
}

export default Noticia;