import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  SignInScreen,
  //   SignUpScreen,
  //   HomeScreen,
  //   ForgotPasswordScreen,
  //   ItemScreen,
  //   CartScreen,
  //   CategoriesScreen,
} from "../screens";

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignIn"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="SignIn" component={SignInScreen}></Stack.Screen>
        {/* <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
        ></Stack.Screen> */}
        {/* <Stack.Screen name="SignUp" component={SignUpScreen}></Stack.Screen> */}
        {/* <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen> */}
        {/* <Stack.Screen name="Item" component={ItemScreen}></Stack.Screen> */}
        {/* <Stack.Screen
          name="Categories"
          component={CategoriesScreen}
        ></Stack.Screen> */}
        {/* <Stack.Screen name="Cart" component={CartScreen}></Stack.Screen> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
