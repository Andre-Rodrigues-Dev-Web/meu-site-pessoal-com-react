import * as React from "react";
//Link
import { Link} from "react-router-dom";
//React Head
import { HeadProvider, Title, Link as LinkHead, Meta } from "react-head";
//Styled Components
import { PageContainer } from "../../components/Theme/style";
import { ButtonLink } from '../../components/Buttons/style';
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
  Grid,
} from "@mui/material";

export const About = () => {
  return (
    <HeadProvider>
      <PageContainer>
        <Title>André Laurentino </Title>
        <LinkHead rel="canonical" href="http://jeremygayed.com/" />
        <Meta name="example" content="whatever" />
        <Container>
          <Grid container spacing={2} mt={2}>
            <Grid item xs={4}>
              <Card sx={{ bgcolor: '#000', color: '#fff', maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={CodeImg}
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
              <Card sx={{ bgcolor: '#000', color: '#fff', maxWidth: 345 }}>
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
              <Card sx={{ bgcolor: '#000', color: '#fff', maxWidth: 345 }}>
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
