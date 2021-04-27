import React from "react";
import Routes from "./source/components/Routes";

import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#F7941D",
    accent: "#FFF200",
  },
};

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <Routes />
    </PaperProvider>
  );
};

export default App;
