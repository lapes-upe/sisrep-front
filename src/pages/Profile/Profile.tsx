import * as React from 'react';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import "./Profile.scss"
import ContainerGlobal from '../../layouts/ContainerGlobal';

export default function Profile() {
  return (
    <ContainerGlobal>
      <Container maxWidth="lg" >
        <Stack>
          <h1>Profile</h1>
        </Stack>
      </Container>
    </ContainerGlobal>
  );
}