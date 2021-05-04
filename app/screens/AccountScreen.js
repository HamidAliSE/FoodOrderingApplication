import React from "react";
import { View, StyleSheet } from "react-native";

import { Text, TouchableRipple } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Primary } from "../resources/constants/colors";

const AccountScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.greetings}>Hello, Hamid Ali</Text>
      <TouchableRipple
        rippleColor={Primary}
        onPress={() => console.log("Action Container Pressed.")}
      >
        <View style={styles.actionContainer}>
          <View style={styles.iconContainer}>
            <Icon name="content-copy" size={24} color="white" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>My Orders</Text>
            <Icon name="chevron-right" size={24} color="lightgrey" />
          </View>
        </View>
      </TouchableRipple>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 16,
  },
  greetings: {
    fontSize: 48,
    paddingHorizontal: 16,
  },
  actionContainer: {
    flexDirection: "row",
    alignItems: "baseline",
    marginVertical: 16,
    paddingHorizontal: 16,
  },
  iconContainer: {
    backgroundColor: Primary,
    borderRadius: 10,
    padding: 8,
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
    flex: 1,
  },
  text: {
    paddingLeft: 16,
    fontSize: 20,
  },
});

export default AccountScreen;
