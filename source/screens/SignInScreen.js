import React from "react";
import { StyleSheet, View, KeyboardAvoidingView } from "react-native";

import {
  Text,
  Image,
  TextInput,
  Button,
  PasswordTextInput,
} from "../components";
import {
  NoAccountPrompt,
  Email,
  Password,
  SignUp,
  SignIn,
} from "../resources/constants/strings";

const SignInScreen = ({ navigation }) => {
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
    right: {
      size: 24,
      color: "black",
    },
  };
  const SignInButtonProps = {
    text: SignIn,
    mode: "contained",
    style: styles.marginFromTop,
    labelStyle: styles.signInButtonLabelStyle,
    onPress: () => {
      navigation.navigate("Tabs");
    },
  };
  const SignUpButtonProps = {
    text: SignUp,
    color: "#000000",
    onPress: () => {
      navigation.navigate("SignUp");
    },
  };

  return (
    <KeyboardAvoidingView style={styles.screen}>
      <Image properties={AppLogoProps} />
      <View style={styles.signInContainer}>
        <TextInput properties={EmailTextInputProps} />
        <PasswordTextInput properties={PasswordTextInputProps} />
        <Button properties={SignInButtonProps}></Button>
        <View style={styles.signUpContainer}>
          <Text properties={NoAccountTextProps} />
          <Button properties={SignUpButtonProps}></Button>
        </View>
      </View>
    </KeyboardAvoidingView>
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
