import styled from "styled-components/native";
import colors from "~/styles/colors";

export const Container = styled.View`
  margin-top: 20px;
`;

export const Title = styled.Text`
  color: ${(props) => props.colorI};
  font-weight: bold;
  font-size: 16px;
`;

export const TextInput = styled.TextInput`
  padding: 0;
  font-size: 20px;
  height: 50px;
  border-bottom-width: 2px;
  border-bottom-color: ${(props) =>
    props.error ? colors.danger : props.colorI};
  color: ${(props) => props.colorI};
`;

export const ErrorLabel = styled.Text`
  font-size: 12px;
  color: ${colors.danger};
`;
