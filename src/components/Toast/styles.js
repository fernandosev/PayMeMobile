import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import colors from "~/styles/colors";

export const Container = styled.View.attrs({
  elevation: 5,
})`
  background-color: ${(props) =>
    props.background ? props.background : colors.white};
  width: 90%;
  height: 80px;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  border-left-width: 5px;
  border-left-color: ${(props) =>
    props.border ? props.border : colors.success};
`;

export const IconContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 100%;
`;

export const Icon = styled(Ionicons).attrs((props) => ({
  name: props.name ? props.name : "checkmark-circle-outline",
  size: 35,
  color: props.color ? props.color : colors.success,
}))``;

export const MessageContent = styled.View`
  width: 60%;
  padding-left: 5px;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: ${(props) => (props.color ? props.color : colors.black)};
  font-weight: bold;
`;

export const SubTitle = styled.Text`
  font-size: 12px;
  color: ${(props) => (props.color ? props.color : colors.black)};
`;

export const BtnClose = styled.TouchableOpacity`
  width: 20%;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const CloseIcon = styled(Ionicons).attrs({
  name: "close-outline",
  size: 35,
  color: `${colors.black}77`,
})``;
