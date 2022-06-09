import * as React from 'react';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import "./Login.scss"
import ContainerGlobal from '../../layouts/ContainerGlobal';

export default function Login() {
  return (
    <ContainerGlobal>
      <Container maxWidth="lg" >
        <Stack>
          <h1>Login</h1>
        </Stack>
      </Container>
    </ContainerGlobal>
  );
}
