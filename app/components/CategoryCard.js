import React from "react";
import { View, StyleSheet, useWindowDimensions } from "react-native";

import { PlacesWithSpace } from "../resources/constants/strings";

import { Card, Text } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const PopularItemCard = (props) => {
  const width = (useWindowDimensions().width - 64) / 3;

  return (
    <Card
      style={[styles.card, { width, backgroundColor: props.backgroundColor }]}
    >
      <View style={styles.cardContainer}>
        <MaterialCommunityIcons name={props.iconName} size={48} color="white" />
        <Text style={styles.text}>{props.name}</Text>
        <Text style={styles.text}>
          {props.availablePlaces}
          {PlacesWithSpace}
        </Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 150,
    marginRight: 16,
  },
  cardContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
	  color: "white",
  }
});

export default PopularItemCard;
