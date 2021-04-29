import React from "react";
import { View, StyleSheet } from "react-native";

import { Rating } from "react-native-elements";
import { Card, Chip } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";

const PopularItemCard = (props) => {
  return (
    <Card style={styles.card}>
      <Card.Cover style={styles.image} source={props.imageSource}></Card.Cover>
      <Card.Title title={props.name} subtitle={props.description}></Card.Title>
      <Card.Content style={styles.cardContent}>
        <Rating startingValue={props.rating} imageSize={18} readonly={true} />
        <View style={styles.chipsContainer}>
          <Chip
            icon={() => <Icon name="place" color="red" />}
            textStyle={styles.chipText}
          >
            {props.distance}m
          </Chip>
          <Chip
            icon={() => <Icon name="schedule" color="red" />}
            textStyle={styles.chipText}
          >
            {props.time}'
          </Chip>
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 300,
    marginRight: 16,
  },
  image: {
    width: "100%",
    height: 150,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
  },
  chipsContainer: {
    flexDirection: "row",
  },
  chipText: {
    color: "red",
  },
});

export default PopularItemCard;
