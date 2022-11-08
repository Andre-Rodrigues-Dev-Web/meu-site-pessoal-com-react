import * as React from "react";
//Link
import { Link } from "react-router-dom";
//React Head
import { HeadProvider, Title, Link as LinkHead, Meta } from "react-head";
//Styled Components
import { PageContainer } from "../../components/Theme/style";
import { ButtonLink } from "../../components/Buttons/style";
import { CardProfile } from "./style";
//MUI Componentes
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Button,
  Container,
  CardActionArea,
  CardActions,
  Grid
} from "@mui/material";

//Base url midias
const baseUrlmidias = "/assets/imgs/";

export const About = () => {
  return (
    <HeadProvider>
      <PageContainer>
        <Title>André Laurentino </Title>
        <LinkHead rel="canonical" href="http://jeremygayed.com/" />
        <Meta name="example" content="whatever" />
        <Container>
          <Grid container spacing={2} mt={2}>
            <Grid item xs={12}>
              <CardProfile>
                <h2>Olá</h2>
                <p>
                  Meu nome é André Laurentino Rodrigues, tenho 29 anos, sou
                  natural da cidade de Luz localizada em Minas Gerais, mas
                  atualmente estou morando em Bambuí. Trabalho como
                  Desenvolvimento Web desde 2012. Sou apaixonado por projetos
                  open source, acredito que a disseminação de conhecimento e
                  boas idéias inspira e melhora o mundo. Atualmente estou
                  trabalhando como Desenvolvedor Front-End na NTT Data. Sou
                  criador do framework Kanai, já ministrei diversos minicursos
                  no IFMG Bambuí, além de diversas palestras focadas no
                  ecossistema Front-End. Nos meus tempos livres amo joga no meu
                  PC, assistir filmes, animes, além de ler livros sobre
                  tecnologia, ecologia, folclore e cultura geek.
                </p>
              </CardProfile>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ bgcolor: "#000", color: "#fff", maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={baseUrlmidias + "code.jpg"}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.white">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Link to="/home">
                    <ButtonLink>Confira meus portfólios</ButtonLink>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ bgcolor: "#000", color: "#fff", maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.white">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Link to="/home">
                    <ButtonLink>Visualizar</ButtonLink>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ bgcolor: "#000", color: "#fff", maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.white">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Link to="/home">
                    <ButtonLink>Visualizar</ButtonLink>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </PageContainer>
    </HeadProvider>
  );
};
