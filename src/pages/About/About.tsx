import * as React from 'react';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import "./About.scss"
import ContainerGlobal from '../../layouts/ContainerGlobal';

export default function About() {
  return (
    <ContainerGlobal>
      <Container maxWidth="lg" >
        <Stack>
          <h1>About</h1>
        </Stack>
      </Container>
    </ContainerGlobal>
  );
}
