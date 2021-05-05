import React from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ScrollView,
} from "react-native";

import { PastOrdersData } from "../resources/constants/strings";
import { PastOrdersListItem } from "../components";

const PastOrdersScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.screenContainer}>
        {PastOrdersData.map((item, index) => (
          <PastOrdersListItem
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

export default PastOrdersScreen;
