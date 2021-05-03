import React from "react";

import {
  SignInScreen,
  SignUpScreen,
  HomeScreen,
  CartScreen,
  CategoriesScreen,
  TransactionsScreen,
  //   ForgotPasswordScreen,
  //   ItemScreen,
} from "../screens";
import { Primary } from "../resources/constants/colors";

import Icon from "react-native-vector-icons/MaterialIcons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const Stack = createStackNavigator();

const Routes = (props) => {
  return (
    <NavigationContainer theme={props.theme}>
      <Stack.Navigator
        initialRouteName="SignIn"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="SignIn" component={SignInScreen}></Stack.Screen>
        <Stack.Screen name="SignUp" component={SignUpScreen}></Stack.Screen>
        <Stack.Screen name="Tabs" component={TabRoutes}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Tab = createMaterialBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      backBehavior="initialRoute"
      shifting={true}
      activeColor="white"
      inactiveColor="white"
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={24} />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          tabBarLabel: "Categories",
          tabBarIcon: ({ color }) => (
            <Icon name="dashboard" color={color} size={24} />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarLabel: "Cart",
          tabBarIcon: ({ color }) => (
            <Icon name="shopping-cart" color={color} size={24} />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Transactions"
        component={TransactionsScreen}
        options={{
          tabBarLabel: "Transactions",
          tabBarIcon: ({ color }) => (
            <Icon name="payment" color={color} size={24} />
          ),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

export default Routes;
