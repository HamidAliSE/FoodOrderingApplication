import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";

import { Text } from "react-native-paper";

const WalletScreen = () => {
  return (
    <View style={styles.screen}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.container}>
        <Text style={styles.text}>Receive Payment</Text>
        <Text style={styles.amount}>$ 05.00</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Withdraw Payment</Text>
        <Text style={styles.amount}>$ 02.00</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Total Payment</Text>
        <Text style={styles.amount}>$ 03.00</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Payment Filter By Type</Text>
        <Text style={styles.amount}>$ 10.00</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  container: {
    marginBottom: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  amount: {
    fontSize: 16,
  },
});

export default WalletScreen;
