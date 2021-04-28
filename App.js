import React from "react";

import Routes from "./source/components/Routes";
import { Primary, Accent } from "./source/resources/constants/colors";

import Icon from "react-native-vector-icons/MaterialIcons";
import { DefaultTheme as NavigationDefaultTheme } from "@react-navigation/native";
import {
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";

const theme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
    primary: Primary,
    accent: Accent,
  },
};

const App = () => {
  return (
    <PaperProvider
      theme={theme}
      settings={{ icon: (props) => <Icon {...props} /> }}
    >
      <Routes theme={theme} />
    </PaperProvider>
  );
};

export default App;
