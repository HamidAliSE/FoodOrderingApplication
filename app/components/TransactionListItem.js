import React from "react";
import { View, StyleSheet } from "react-native";

import { Text, Divider } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const TransactionListItem = (props) => {
  return (
    <View>
      <View style={styles.container}>
        <Icon name={props.iconName} size={36} color={props.iconColor} />
        <View style={styles.textContainer}>
          <View style={styles.innerTextContainer}>
            <Text style={styles.primaryText}>{props.category}</Text>
            <Text style={styles.primaryText}>{props.amount}</Text>
          </View>
          <View style={styles.innerTextContainer}>
            <Text style={styles.secondaryText}>{props.date}</Text>
            <Text style={styles.secondaryText}>{props.name}</Text>
          </View>
        </View>
      </View>
      <Divider />
      {/* <View style={{ backgroundColor: "grey", height: 1 }} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    flexDirection: "row",
  },
  textContainer: {
    flex: 1,
    marginLeft: 16,
    flexDirection: "column",
  },
  innerTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  primaryText: {
    fontWeight: "bold",
  },
  secondaryText: {
    color: "grey",
  },
});

export default TransactionListItem;
