import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";

const NotificationsScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <Text>NotificationsScreen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default NotificationsScreen;
