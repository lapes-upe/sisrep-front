import * as React from 'react';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import "./Contact.scss"
import ContainerGlobal from '../../layouts/ContainerGlobal';

export default function Contact() {
  return (
    <ContainerGlobal>
      <Container maxWidth="lg" >
        <Stack>
          <h1>Contact</h1>
        </Stack>
      </Container>
    </ContainerGlobal>
  );
}
