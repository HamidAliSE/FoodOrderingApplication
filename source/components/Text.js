import React from "react";

import { Text as PaperText } from "react-native-paper";

const Text = (props) => {
  return <PaperText>{props.properties.text}</PaperText>;
};
export default Text;
