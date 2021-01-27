import React from "react";
import Toast from "react-native-toast-message";
import { useSelector } from "react-redux";
import colors from "~/styles/colors";
import {
  Container,
  IconContainer,
  Icon,
  BtnClose,
  MessageContent,
  Title,
  SubTitle,
  CloseIcon,
} from "./styles";

export default function ToastComponent({ title, subtitle, icon, color }) {
  const appTheme = useSelector((state) => state.payme.theme);

  return (
    <Container
      background={appTheme === "light" ? colors.white : color}
      border={color}
    >
      <IconContainer>
        <Icon name={icon} color={appTheme === "light" ? color : colors.white} />
      </IconContainer>
      <MessageContent>
        <Title color={appTheme === "light" ? color : colors.white}>
          {title}
        </Title>
        <SubTitle color={appTheme === "light" ? color : colors.white}>
          {subtitle}
        </SubTitle>
      </MessageContent>
      <BtnClose onPress={() => Toast.hide()}>
        <CloseIcon />
      </BtnClose>
    </Container>
  );
}
