import styled from "styled-components/native";
import colors from "~/styles/colors";

export const Container = styled.View`
  width: 320px;
  height: 210px;
  border-radius: 10px;
  background-color: ${colors.secondaryColor};
  padding: 20px;
  justify-content: center;
`;

export const Chip = styled.View`
  width: 60px;
  height: 40px;
  border-radius: 10px;
  margin-bottom: 20px;
  margin-top: 40px;
  background-color: ${colors.darkGolden};
`;

export const Number = styled.Text`
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 5px;
`;

export const Name = styled.Text`
  font-size: 16px;
  margin-bottom: 5px;
`;

export const ExpireDate = styled.Text`
  font-weight: bold;
`;

export const Flag = styled.Image`
  width: ${(props) => props.dimensions.width}px;
  height: ${(props) => props.dimensions.height}px;
  position: absolute;
  top: 25px;
  right: 25px;
`;
