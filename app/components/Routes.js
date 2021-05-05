import React from "react";

import {
  SignInScreen,
  SignUpScreen,
  HomeScreen,
  AccountScreen,
  CategoriesScreen,
  ActiveOrdersScreen,
  PastOrdersScreen,
} from "../screens";
import { Primary } from "../resources/constants/colors";

import Icon from "react-native-vector-icons/MaterialIcons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
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
        <Stack.Screen
          name="OrdersTabs"
          component={OrdersTabsRoutes}
          options={{ headerShown: true, title: "Orders" }}
        ></Stack.Screen>
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
        name="Account"
        component={AccountScreen}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ color }) => (
            <Icon name="account-circle" color={color} size={24} />
          ),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

const OrdersTabs = createMaterialTopTabNavigator();

const OrdersTabsRoutes = () => {
  return (
    <OrdersTabs.Navigator
      initialRouteName="ActiveOrders"
      backBehavior="initialRoute"
      tabBarOptions={{
        showIcon: true,
        activeTintColor: Primary,
        inactiveTintColor: "black",
      }}
    >
      <OrdersTabs.Screen
        name="ActiveOrders"
        component={ActiveOrdersScreen}
        options={{
          tabBarLabel: "Active Orders",
          tabBarIcon: ({ color }) => (
            <Icon name="content-copy" color={color} size={24} />
          ),
        }}
      ></OrdersTabs.Screen>
      <OrdersTabs.Screen
        name="PastOrders"
        component={PastOrdersScreen}
        options={{
          tabBarLabel: "Past Orders",
          tabBarIcon: ({ color }) => (
            <Icon name="content-copy" color={color} size={24} />
          ),
        }}
      ></OrdersTabs.Screen>
    </OrdersTabs.Navigator>
  );
};

export default Routes;
