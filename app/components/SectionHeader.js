import React from "react";
import { View, StyleSheet, Text } from "react-native";

const SectionHeader = (props) => {
  return (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionHeading}>{props.heading}</Text>
      <Text style={styles.sectionAction}>{props.action}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionHeader: {
    marginVertical: 8,
    flexDirection: "row",
    marginHorizontal: 16,
    justifyContent: "space-between",
  },
  sectionHeading: {
    fontWeight: "bold",
    fontSize: 16,
  },
  sectionAction: {
    color: "red",
  },
});

export default SectionHeader;
