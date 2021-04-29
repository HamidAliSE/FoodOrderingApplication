import React from "react";
import {
  View,
  ScrollView,
  StatusBar,
  SafeAreaView,
  StyleSheet,
} from "react-native";

import { PopularItemCard, SectionHeader } from "../components";
import {
  WelcomeMessage,
  UserName,
  SearchBarPlaceHolder,
  Popular,
  Categories,
  Recommended,
  ViewMore,
  ShowAll,
  PopularData,
} from "../resources/constants/strings";

import { Text, Searchbar } from "react-native-paper";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <ScrollView style={styles.screenContainer}>
        <Text style={styles.greetings}>{WelcomeMessage}</Text>
        <Text style={styles.name}>{UserName}</Text>
        <Searchbar
          style={styles.searchBar}
          placeholder={SearchBarPlaceHolder}
        ></Searchbar>
        <SectionHeader heading={Popular} action={ViewMore} />
        <View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.popularContentContainer}
          >
            <PopularItemCard
              imageSource={require("../resources/images/burger.jpg")}
              name="Burger"
              description="Ahmad Burger, Fast Food"
              rating={4.7}
              distance={254}
              time={27}
            />
            <PopularItemCard
              imageSource={require("../resources/images/burger.jpg")}
              name="Burger"
              description="Ahmad Burger, Fast Food"
              rating={4.7}
              distance={254}
              time={27}
            />
            <PopularItemCard
              imageSource={require("../resources/images/burger.jpg")}
              name="Burger"
              description="Ahmad Burger, Fast Food"
              rating={4.7}
              distance={254}
              time={27}
            />
            <PopularItemCard
              imageSource={require("../resources/images/burger.jpg")}
              name="Burger"
              description="Ahmad Burger, Fast Food"
              rating={4.7}
              distance={254}
              time={27}
            />
            <PopularItemCard
              imageSource={require("../resources/images/burger.jpg")}
              name="Burger"
              description="Ahmad Burger, Fast Food"
              rating={4.7}
              distance={254}
              time={27}
            />
          </ScrollView>
        </View>
        {/* <SectionHeader heading={Categories} action={ShowAll} /> */}
        {/* <SectionHeader heading={Recommended} action={ViewMore} /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  screenContainer: {
    flex: 1,
    marginTop: 16,
  },
  greetings: {
    fontSize: 16,
    marginHorizontal: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginHorizontal: 16,
  },
  searchBar: {
    marginHorizontal: 16,
  },
  popularContentContainer: {
    paddingLeft: 16,
  },
});

export default HomeScreen;
