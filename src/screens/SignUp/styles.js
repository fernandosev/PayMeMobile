import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import colors from "~/styles/colors";

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    alignItems: "center",
    paddingBottom: 80,
  },
})`
  background-color: ${(props) =>
    props.appTheme === "light" ? colors.white : colors.black};
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 34px;
  color: ${(props) =>
    props.appTheme === "light" ? colors.white : colors.primaryColor};
  font-weight: bold;
  top: 15%;
  position: absolute;
`;

export const FormContainer = styled.View`
  margin-top: 100%;
  padding: 0 20px;
  width: 100%;
`;

export const BackButton = styled.TouchableOpacity.attrs({
  elevation: 20,
})`
  width: 50px;
  height: 50px;
  background-color: ${(props) =>
    props.background ? props.background : colors.primaryColor};
  border-radius: 25px;
  position: absolute;
  top: 20px;
  left: 20px;
  align-items: center;
  justify-content: center;
`;

export const BackButtonIcon = styled(Ionicons).attrs({
  size: 28,
  color: colors.white,
  name: "arrow-back-outline",
})``;
