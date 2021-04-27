import React from "react";
import { KeyboardAvoidingView, View, StyleSheet } from "react-native";

import {
  Text,
  Image,
  TextInput,
  Button,
  PasswordTextInput,
  ButtonGroup,
} from "../components";
import {
  AlreadyRegisteredPrompt,
  Email,
  Password,
  SignUp,
  SignIn,
  Name,
  ConfirmPassword,
  UserTypes,
} from "../resources/constants/strings";
import { Primary } from "../resources/constants/colors";

const SignUpScreen = ({ navigation }) => {
  const AlreadyRegisteredTextProps = { text: AlreadyRegisteredPrompt };
  const AppLogoProps = {
    source: require("../resources/images/AppLogo.jpg"),
    style: styles.logo,
  };
  const NameTextInputProps = {
    label: Name,
    mode: "outlined",
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
  const ConfirmPasswordTextInputProps = {
    style: styles.marginFromTop,
    label: ConfirmPassword,
    mode: "outlined",
    right: {
      size: 24,
      color: "black",
    },
  };
  const SignInButtonProps = {
    text: SignIn,
    color: "#000000",
    onPress: () => {
      navigation.navigate("SignIn");
    },
  };
  const SignUpButtonProps = {
    text: SignUp,
    mode: "contained",
    style: styles.marginFromTop,
    labelStyle: styles.signUpButtonLabelStyle,
    onPress: () => {
      console.log("Sign Up Button Pressed.");
    },
  };
  const UserTypeSegmentProps = {
    buttons: UserTypes,
    containerStyle: styles.userTypeContainerStyle,
    selectedButtonStyle: styles.selectedUserButtonStyle,
  };

  return (
    <KeyboardAvoidingView style={styles.screen}>
      <Image properties={AppLogoProps} />
      <View style={styles.signUpContainer}>
        <ButtonGroup properties={UserTypeSegmentProps}></ButtonGroup>
        <TextInput properties={NameTextInputProps} />
        <TextInput properties={EmailTextInputProps} />
        <PasswordTextInput properties={PasswordTextInputProps} />
        <PasswordTextInput properties={ConfirmPasswordTextInputProps} />
        <Button properties={SignUpButtonProps}></Button>
        <View style={styles.signInContainer}>
          <Text properties={AlreadyRegisteredTextProps} />
          <Button properties={SignInButtonProps}></Button>
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
  signUpContainer: {
    width: "90%",
    alignItems: "stretch",
  },
  signInContainer: {
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
  signUpButtonLabelStyle: {
    color: "#FFFFFF",
  },
  userTypeContainerStyle: {
    marginTop: 10,
    width: "100%",
    alignSelf: "center",
  },
  selectedUserButtonStyle: {
    backgroundColor: Primary,
  },
});

export default SignUpScreen;
