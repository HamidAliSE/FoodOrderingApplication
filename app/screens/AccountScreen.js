import React from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ScrollView,
} from "react-native";

import { Text, TouchableRipple } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
  FontAwesome,
  Fontisto,
  Ionicons,
  Feather,
  Entypo,
} from "@expo/vector-icons";
import { Primary } from "../resources/constants/colors";

const AccountScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Text style={styles.greetings}>Hello, Hamid Ali</Text>
      <ScrollView>
        <TouchableRipple
          rippleColor={Primary}
          onPress={() => navigation.navigate("OrdersTabs")}
        >
          <View style={styles.actionContainer}>
            <View style={styles.iconContainer}>
              <Icon name="content-copy" size={24} color="white" />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.text}>My Orders</Text>
              <Icon name="chevron-right" size={24} color="lightgrey" />
            </View>
          </View>
        </TouchableRipple>
        <TouchableRipple
          rippleColor={Primary}
          onPress={() => navigation.navigate("Notifications")}
        >
          <View style={styles.actionContainer}>
            <View style={styles.iconContainer}>
              <Ionicons name="notifications" size={24} color="white" />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.text}>Notifications</Text>
              <Icon name="chevron-right" size={24} color="lightgrey" />
            </View>
          </View>
        </TouchableRipple>
        <TouchableRipple
          rippleColor={Primary}
          onPress={() => navigation.navigate("MyDetails")}
        >
          <View style={styles.actionContainer}>
            <View style={styles.iconContainer}>
              <FontAwesome name="user-o" size={24} color="white" />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.text}>My Details</Text>
              <Icon name="chevron-right" size={24} color="lightgrey" />
            </View>
          </View>
        </TouchableRipple>
        <TouchableRipple
          rippleColor={Primary}
          onPress={() => navigation.navigate("PaymentMethods")}
        >
          <View style={styles.actionContainer}>
            <View style={styles.iconContainer}>
              <Ionicons name="card-outline" size={24} color="white" />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.text}>Payment Methods</Text>
              <Icon name="chevron-right" size={24} color="lightgrey" />
            </View>
          </View>
        </TouchableRipple>
        <TouchableRipple
          rippleColor={Primary}
          onPress={() => navigation.navigate("Reviews")}
        >
          <View style={styles.actionContainer}>
            <View style={styles.iconContainer}>
              <Feather name="message-square" size={24} color="white" />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.text}>Reviews</Text>
              <Icon name="chevron-right" size={24} color="lightgrey" />
            </View>
          </View>
        </TouchableRipple>
        <TouchableRipple
          rippleColor={Primary}
          onPress={() => navigation.navigate("Favorites")}
        >
          <View style={styles.actionContainer}>
            <View style={styles.iconContainer}>
              <Feather name="heart" size={24} color="white" />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.text}>Favorites</Text>
              <Icon name="chevron-right" size={24} color="lightgrey" />
            </View>
          </View>
        </TouchableRipple>
        <TouchableRipple
          rippleColor={Primary}
          onPress={() => navigation.navigate("ReferFriend")}
        >
          <View style={styles.actionContainer}>
            <View style={styles.iconContainer}>
              <Entypo name="forward" size={24} color="white" />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.text}>Refer A Friend</Text>
              <Icon name="chevron-right" size={24} color="lightgrey" />
            </View>
          </View>
        </TouchableRipple>
        <TouchableRipple
          rippleColor={Primary}
          onPress={() => navigation.navigate("FAQ")}
        >
          <View style={styles.actionContainer}>
            <View style={styles.iconContainer}>
              <FontAwesome name="question-circle-o" size={24} color="white" />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.text}>FAQ's</Text>
              <Icon name="chevron-right" size={24} color="lightgrey" />
            </View>
          </View>
        </TouchableRipple>
        <TouchableRipple
          rippleColor={Primary}
          onPress={() => navigation.navigate("RateApp")}
        >
          <View style={styles.actionContainer}>
            <View style={styles.iconContainer}>
              <Feather name="star" size={24} color="white" />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.text}>Rate The App</Text>
              <Icon name="chevron-right" size={24} color="lightgrey" />
            </View>
          </View>
        </TouchableRipple>
        <TouchableRipple
          rippleColor={Primary}
          onPress={() => navigation.navigate("ContactUs")}
        >
          <View style={styles.actionContainer}>
            <View style={styles.iconContainer}>
              <FontAwesome name="comments-o" size={24} color="white" />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.text}>Contact Us</Text>
              <Icon name="chevron-right" size={24} color="lightgrey" />
            </View>
          </View>
        </TouchableRipple>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingVertical: 16,
  },
  greetings: {
    fontSize: 48,
    paddingHorizontal: 16,
  },
  actionContainer: {
    flexDirection: "row",
    alignItems: "baseline",
    marginVertical: 16,
    paddingHorizontal: 16,
  },
  iconContainer: {
    backgroundColor: Primary,
    borderRadius: 10,
    padding: 8,
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
    flex: 1,
  },
  text: {
    paddingLeft: 16,
    fontSize: 20,
  },
});

export default AccountScreen;
