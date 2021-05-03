import React from "react";
import { StyleSheet, useWindowDimensions } from "react-native";

import { Rating } from "react-native-elements";
import { Card } from "react-native-paper";

const RecommendedCard = (props) => {
  const width = (useWindowDimensions().width - 48) / 2;

  return (
    <Card style={[styles.card, { width }]}>
      <Card.Cover style={styles.image} source={props.imageSource}></Card.Cover>
      <Card.Title title={props.name} subtitle={props.description}></Card.Title>
      <Card.Content style={styles.cardContent}>
        <Rating startingValue={props.rating} imageSize={18} readonly={true} />
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginRight: 16,
  },
  image: {
    width: "100%",
    height: 150,
  },
  cardContent: {
    alignItems: "flex-start",
  },
});

export default RecommendedCard;
