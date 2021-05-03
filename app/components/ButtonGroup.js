import React, { useState } from "react";

import { ButtonGroup as ElementsButtonGroup } from "react-native-elements";

const ButtonGroup = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const updateSelectedIndex = (selectedIndex) => {
    setSelectedIndex(selectedIndex);
  };

  return (
    <ElementsButtonGroup
      buttons={props.properties.buttons}
      containerStyle={props.properties.containerStyle}
      selectedButtonStyle={props.properties.selectedButtonStyle}
      selectedIndex={selectedIndex}
      onPress={updateSelectedIndex}
    ></ElementsButtonGroup>
  );
};

export default ButtonGroup;
