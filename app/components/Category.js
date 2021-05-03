import React from "react";
import { View, StyleSheet, useWindowDimensions } from "react-native";

import { PlacesWithSpace } from "../resources/constants/strings";

import { Card, Text } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Category = (props) => {
  const width = (useWindowDimensions().width - 64) / 3;

  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <MaterialCommunityIcons name={props.iconName} size={48} />
      </View>
      <Text>{props.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 16,
    alignItems: "center",
  },
  circle: {
    borderWidth: 3,
    borderRadius: 90,
    padding: 16,
  },
});

export default Category;
