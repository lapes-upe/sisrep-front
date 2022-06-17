import "./Home.scss"
import ContainerCustom from '../../layouts/ContainerCustom/ContainerCustom';
import { useContext } from "react";
import { DataContext } from "../../contexts/Data/Context";
import { Box, Button, Container, Link, Typography } from "@mui/material";
import LogoUPE from "../../assets/LogoUPE(normal).png";
import CardServices from "../../components/CardServices/CardServices";

export default function Home() {
  const { auth } = useContext(DataContext);
  const cards = [
    {
      imgSrc: `${LogoUPE}`,
      title: 'Preencher PADs 1',
      paragraphy: 'Preencha seus PADs de maneira rápida e fácil, Preencha seus PADs de maneira rápida e fácil'
    },
    {
      imgSrc: `${LogoUPE}`,
      title: 'Preencher PADs 2',
      paragraphy: 'Preencha seus PADs de maneira rápida e fácil'
    },
    {
      imgSrc: `${LogoUPE}`,
      title: 'Preencher PADs 3',
      paragraphy: 'Preencha seus PADs de maneira rápida e fácil'
    },
    {
      imgSrc: `${LogoUPE}`,
      title: 'Preencher PADs 4',
      paragraphy: 'Preencha seus PADs de maneira rápida e fácil'
    },
    {
      imgSrc: `${LogoUPE}`,
      title: 'Preencher PADs 7',
      paragraphy: 'Preencha seus PADs de maneira rápida e fácil'
    },
    {
      imgSrc: `${LogoUPE}`,
      title: 'Preencher PADs 6',
      paragraphy: 'Preencha seus PADs de maneira rápida e fácil'
    },
  ];

  return (
    <Container className='home' sx={{ backgroundColor: 'primary.contrastText' }}>
      <Box className="SectionOne">
        <Typography variant="h1" >Serviços UPE</Typography>
        <Typography component='p' >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptates eaque nulla assumenda totam nobis accusantium aut eius repellendus, adipisci quisquam possimus veniam velit commodi ipsam inventore quaerat reiciendis quod atque fugiat fugit! Quo similique iure quisquam eveniet cum id voluptatibus dolorem, facere, blanditiis aliquam ex atque voluptatem, consequatur praesentium optio veniam iste impedit minus nostrum doloribus tempore ducimus enim natus ratione! Modi, quod omnis laboriosam dolor ut sapiente ullam.
        </Typography>
        <Box>
          <Button variant="contained">Acessar Sistema</Button>
        </Box>
        <Box className="horizontalLine" sx={{ backgroundColor: 'primary.main' }}></Box>
      </Box>
      <Typography variant="h2" >Acesse nossos serviços</Typography>
      <Box className="SectionTwo">
        {cards.map((service, idx) => (
          <CardServices key={idx} imgSrc={service.imgSrc} title={service.title} paragraphy={service.paragraphy} />
        )
        )}
      </Box>
    </Container>
  );
}
