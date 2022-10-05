import React from "react";

import { Container, Title, Header } from "./styles";

import headerImage from "../../assets/header.png";

export function Home() {
  return (
    <Container>
      <Header source={headerImage} />
      <Title>EXPO APP</Title>
    </Container>
  );
}
