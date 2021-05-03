import React from "react";
import { Image as ReactNativeImage } from "react-native";

const Image = (props) => {
  return (
    <ReactNativeImage
      source={props.properties.source}
      style={props.properties.style}
    />
  );
};

export default Image;
