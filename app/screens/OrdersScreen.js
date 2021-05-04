import React from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ScrollView,
} from "react-native";

import { TransactionsData } from "../resources/constants/strings";
import { TransactionListItem } from "../components";

const OrdersScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.screenContainer}>
        {TransactionsData.map((item, index) => (
          <TransactionListItem
            key={index}
            iconName={item.IconName}
            category={item.Category}
            iconColor={item.IconColor}
            date={item.date}
            amount={item.Amount}
            name={item.Name}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "white",
  },
  screenContainer: {
    paddingTop: 16,
    paddingHorizontal: 16,
  },
});

export default OrdersScreen;
