import React from "react";
import { SafeAreaView, StyleSheet, ScrollView, StatusBar } from "react-native";

import { CategoryCard } from "../components";
import { CategoriesData } from "../resources/constants/strings";

const CategoriesScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.screenContainer}>
        {CategoriesData.map((item, index) => (
          <CategoryCard
            key={index}
            name={item.Name}
            iconName={item.IconName}
            availablePlaces={item.AvailablePlaces}
            backgroundColor={item.BackgroundColor}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  screenContainer: {
    paddingVertical: 16,
    paddingLeft: 16,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default CategoriesScreen;
