import * as React from 'react';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import "./Home.scss"
import ContainerGlobal from '../../layouts/ContainerGlobal';

export default function Home() {
  return (
    <ContainerGlobal>
      <Container maxWidth="lg" >
        <Stack>
          <h1>Home</h1>
        </Stack>
      </Container>
    </ContainerGlobal>
  );
}
