import React from "react";
import { Button as PaperButton } from "react-native-paper";

const Button = (props) => {
  return (
    <PaperButton
      style={props.properties.style}
      labelStyle={props.properties.labelStyle}
      onPress={props.properties.onPress}
      color={props.properties.color}
      mode={props.properties.mode}
    >
      {props.properties.text}
    </PaperButton>
  );
};

export default Button;
