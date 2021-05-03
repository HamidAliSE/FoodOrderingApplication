import React, { useState, useEffect } from "react";

import { TextInput as PaperTextInput } from "react-native-paper";

const PasswordTextInput = (props) => {
  const [hide, setHide] = useState(true);

  return (
    <PaperTextInput
      style={props.properties.style}
      mode={props.properties.mode}
      label={props.properties.label}
      secureTextEntry={hide}
      right={
        <PaperTextInput.Icon
          name={hide ? "visibility-off" : "visibility"}
          size={props.properties.right?.size}
          color={props.properties.right?.color}
          onPress={() => setHide(!hide)}
        />
      }
    ></PaperTextInput>
  );
};

export default PasswordTextInput;
