import React from "react";
import { StyleSheet, View } from "react-native";

import { Text, Image, TextInput, Button } from "../components";
import {
  NoAccountPrompt,
  Email,
  Password,
  SignUp,
  SignIn,
} from "../resources/constants/strings";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const SignInScreen = () => {
  const NoAccountTextProps = { text: NoAccountPrompt };
  const AppLogoProps = {
    source: require("../resources/images/AppLogo.jpg"),
    style: styles.logo,
  };
  const EmailTextInputProps = {
    style: styles.marginFromTop,
    label: Email,
    mode: "outlined",
  };
  const PasswordTextInputProps = {
    style: styles.marginFromTop,
    label: Password,
    mode: "outlined",
  };
  const SignInButtonProps = {
    text: SignIn,
    mode: "contained",
    style: styles.marginFromTop,
    labelStyle: styles.signInButtonLabelStyle,
    onPress: () => {
      console.log("Sign In Button Pressed.");
    },
  };
  const SignUpButtonProps = {
    text: SignUp,
    color: "#000000",
    onPress: () => {
      console.log("Sign Up Button Pressed.");
    },
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.screen}>
      <Image properties={AppLogoProps} />
      <View style={styles.signInContainer}>
        <TextInput properties={EmailTextInputProps} />
        <TextInput properties={PasswordTextInputProps} />
        <Button properties={SignInButtonProps}></Button>
        <View style={styles.signUpContainer}>
          <Text properties={NoAccountTextProps} />
          <Button properties={SignUpButtonProps}></Button>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  signInContainer: {
    width: "90%",
    alignItems: "stretch",
  },
  signUpContainer: {
    flexDirection: "row",
    alignItems: "baseline",
    alignSelf: "flex-end",
  },
  logo: {
    width: 100,
    height: 100,
  },
  marginFromTop: {
    marginTop: 10,
  },
  signInButtonLabelStyle: {
    color: "#FFFFFF",
  },
});

export default SignInScreen;
