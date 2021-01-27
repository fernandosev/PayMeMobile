import styled from "styled-components/native";
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

export const RegisterContainer = styled.TouchableOpacity`
  width: 100%;
  margin-top: 20px;
`;

export const Register = styled.Text`
  text-align: center;
  color: ${(props) => (props.color ? props.color : colors.primaryColor)};
  font-size: 20px;
  font-weight: bold;
  text-decoration: underline;
`;
