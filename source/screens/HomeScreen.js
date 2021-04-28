import React from "react";
import {
  View,
  ScrollView,
  StatusBar,
  SafeAreaView,
  StyleSheet,
} from "react-native";

import { PopularItemCard } from "../components";

import { Text, Searchbar } from "react-native-paper";

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <ScrollView style={{ flex: 1 }}>
        <Text style={styles.greetings}>Welcome Back</Text>
        <Text style={styles.name}>Hamid Ali</Text>
        <Searchbar
          style={styles.searchbar}
          placeholder="Search for dish or restaurant"
        ></Searchbar>
        <View
          style={{
            flexDirection: "row",
            marginHorizontal: 10,
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>
            Popular Near You
          </Text>
          <Text style={{ color: "red" }}>View More</Text>
        </View>
        <ScrollView style={{ flexDirection: "row", paddingLeft: 10 }}>
          <PopularItemCard
            imageSource={require("../resources/images/burger.jpg")}
            name="Burger"
            description="Ahmad Burger, Fast Food"
            rating={4.7}
          />
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  greetings: {
    marginLeft: 10,
    fontSize: 16,
  },
  name: {
    marginLeft: 10,
    fontSize: 24,
    fontWeight: "bold",
  },
  searchbar: {
    marginHorizontal: 10,
  },
});

export default HomeScreen;
