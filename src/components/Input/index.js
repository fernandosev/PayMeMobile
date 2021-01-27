import React from "react";

import { Container, Title, TextInput, ErrorLabel } from "./styles";
import colors from "~/styles/colors";

export default function Input({
  color = colors.primaryColor,
  title,
  mask = null,
  errorText = null,
  ...rest
}) {
  return (
    <Container>
      {title && <Title colorI={color}>{title}</Title>}
      <TextInput error={errorText} colorI={color} {...rest}></TextInput>

      <ErrorLabel>{errorText}</ErrorLabel>
    </Container>
  );
}
