import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Linking,
  Platform,
} from "react-native";

import { Button, Modal, Portal } from "react-native-paper";

const ContactScreen = ({ navigation }) => {
  const [showContacts, setShowContacts] = useState(false);

  const makeCall = () => {
    if (Platform.OS === "android") {
      Linking.openURL("tel:090078601");
    } else {
      Linking.openURL("telprompt:090078601");
    }
    console.log("Make A Call.");
  };

  const sendEmail = () => {
    Linking.openURL("mailto:abc@gmail.com");
    console.log("Send An Email.");
  };

  return (
    <SafeAreaView style={styles.screen}>
      <Button
        mode="outlined"
        style={styles.showContactsButton}
        onPress={() => setShowContacts(true)}
      >
        Show Contacts
      </Button>
      <Portal>
        <Modal
          visible={showContacts}
          onDismiss={() => setShowContacts(false)}
          contentContainerStyle={styles.modal}
        >
          <View style={styles.contactButtonsContainer}>
            <Button
              icon="call"
              mode="outlined"
              style={styles.contactButtons}
              onPress={makeCall}
            >
              Call
            </Button>
            <Button
              icon="email"
              mode="outlined"
              style={styles.contactButtons}
              onPress={sendEmail}
            >
              Email
            </Button>
          </View>
        </Modal>
      </Portal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  showContactsButton: {
    borderColor: "#F7941D",
  },
  modal: {
    backgroundColor: "white",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: "100%",
    paddingVertical: 16,
    position: "absolute",
    bottom: 0,
  },
  contactButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  contactButtons: {
    borderRadius: 20,
  },
});

export default ContactScreen;
