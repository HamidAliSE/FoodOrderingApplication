import React from "react";
import { ScrollView, StatusBar, SafeAreaView, StyleSheet } from "react-native";

import {
  PopularItemCard,
  SectionHeader,
  Category,
  RecommendedCard,
} from "../components";
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
  CategoriesData,
  RecommendedData,
} from "../resources/constants/strings";
import { Primary } from "../resources/constants/colors";

import { Text, Searchbar, Button } from "react-native-paper";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.screenContainer}>
        <Text style={styles.greetings}>{WelcomeMessage}</Text>
        <Text style={styles.name}>{UserName}</Text>
        <Button
          mode="outlined"
          style={{
            borderColor: Primary,
            width: "90%",
            alignSelf: "center",
            marginBottom: 8,
          }}
          onPress={() => navigation.navigate("Invoice")}
        >
          Show Invoice Screen
        </Button>
        <Button
          mode="outlined"
          style={{
            borderColor: Primary,
            width: "90%",
            alignSelf: "center",
            marginBottom: 8,
          }}
          onPress={() => navigation.navigate("Contact")}
        >
          Show Contact Screen
        </Button>
        <Searchbar
          style={styles.searchBar}
          placeholder={SearchBarPlaceHolder}
        ></Searchbar>
        <SectionHeader heading={Popular} action={ViewMore} />
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalScrollContentContainer}
        >
          {PopularData.map((item, index) => (
            <PopularItemCard
              key={index}
              imageSource={item.ImageSource}
              name={item.Name}
              description={item.Description}
              rating={item.Rating}
              distance={item.Distance}
              time={item.Time}
            />
          ))}
        </ScrollView>
        <SectionHeader heading={Categories} action={ShowAll} />
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalScrollContentContainer}
        >
          {CategoriesData.map((item, index) => (
            <Category
              key={index}
              name={item.Name}
              iconName={item.IconName}
              availablePlaces={item.AvailablePlaces}
              backgroundColor={item.BackgroundColor}
            />
          ))}
        </ScrollView>
        <SectionHeader heading={Recommended} action={ViewMore} />
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalScrollContentContainer}
        >
          {RecommendedData.map((item, index) => (
            <RecommendedCard
              key={index}
              imageSource={item.ImageSource}
              name={item.Name}
              description={item.Description}
              rating={item.Rating}
            />
          ))}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  screenContainer: {
    paddingVertical: 16,
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
  horizontalScrollContentContainer: {
    paddingLeft: 16,
  },
});

export default HomeScreen;
