import React from "react";

import { TextInput as PaperTextInput } from "react-native-paper";

const TextInput = (props) => {
  return (
    <PaperTextInput
      style={props.properties.style}
      mode={props.properties.mode}
      label={props.properties.label}
    ></PaperTextInput>
  );
};

export default TextInput;
