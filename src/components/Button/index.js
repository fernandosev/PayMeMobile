import React from "react";

import { Container, TextButton, Icon } from "./styles";
import { ActivityIndicator } from "react-native";

export default function Button({
  text = "",
  icon = null,
  action = null,
  color = "white",
  background = "black",
  loading = false,
}) {
  return (
    <Container onPress={!loading ? action : null} background={background}>
      <TextButton color={color}>{text}</TextButton>
      {loading && <ActivityIndicator color={color} />}
      {!loading && <Icon name={icon} />}
    </Container>
  );
}
