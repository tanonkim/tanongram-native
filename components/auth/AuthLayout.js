import React from "react";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  background-color: black;
  align-items: center;
  justify-content: center;
  padding: 0px 40px;
`;

const Logo = styled.Image`
  max-width: 80%;
  width: 100%;
  height: 20%;
  margin-bottom: -10px;
`;

export default function AuthLayout({ children }) {
  const dissmissKeyboard = () => {
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback style={{ flex: 1 }} onPress={dissmissKeyboard}>
      <Container>
        <Logo
          resizeMode="contain"
          source={require("../../assets/insta-loading.png")}
        />
        {children}
      </Container>
    </TouchableWithoutFeedback>
  );
}
