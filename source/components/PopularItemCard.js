import React from "react";
import { StyleSheet } from "react-native";

import { Card } from "react-native-paper";
import { Rating } from "react-native-elements";

const PopularItemCard = (props) => {
  return (
    <Card style={styles.card}>
      <Card.Cover style={styles.image} source={props.imageSource}></Card.Cover>
      <Card.Title title={props.name} subtitle={props.description}></Card.Title>
      <Card.Content>
        <Rating
          startingValue={props.rating}
          imageSize={18}
          style={styles.rating}
          readonly={true}
        />
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 250,
  },
  image: {
    width: "100%",
    height: 150,
  },
  rating: {
    alignSelf: "flex-start",
  },
});

export default PopularItemCard;
