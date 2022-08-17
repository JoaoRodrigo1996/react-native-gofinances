import styled from "styled-components/native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import { RFValue } from "react-native-responsive-fontsize";
import { PropsWithChildren } from "react";

interface ButtonProps extends PropsWithChildren<RectButtonProps> {}

export const Container = styled(RectButton)<ButtonProps>`
  width: 100%;
  padding: 18px;
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: 6px;

  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;
`;
