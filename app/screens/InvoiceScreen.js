import React, { useState } from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";
import { Button, Modal, Portal, IconButton } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";

const InvoiceScreen = ({ navigation }) => {
  const [showInvoice, setShowInvoice] = useState(false);

  const dismissInvoiceModal = () => {
    setShowInvoice(false);
    navigation.goBack();
  };

  const saveInvoice = () => {
    // Todo: Save Invoice To Gallery.
    dismissInvoiceModal();
  };

  return (
    <SafeAreaView style={styles.screen}>
      <Button
        mode="outlined"
        style={styles.showInvoiceButton}
        onPress={() => setShowInvoice(true)}
      >
        Show Invoice
      </Button>
      <Portal>
        <Modal
          visible={showInvoice}
          onDismiss={dismissInvoiceModal}
          contentContainerStyle={styles.modal}
        >
          <IconButton
            icon="clear"
            color="black"
            size={18}
            onPress={dismissInvoiceModal}
            style={styles.dismissButton}
          />
          <Icon
            name="check-circle"
            color="green"
            size={48}
            style={styles.successIcon}
          ></Icon>
          <Text style={styles.appName}>Safar</Text>
          <Text style={styles.transactionSuccessMessage}>
            Transaction Successful
          </Text>
          <Text style={styles.orderSuccessMessage}>Order has been placed.</Text>
          <Text style={styles.subTitle}>12-May-2021 03:30 PM</Text>
          <Text style={styles.subTitle}>ID#123456789</Text>
          <Text style={styles.title}>Vendor Name</Text>
          <Text style={styles.subTitle}>BugSol</Text>
          <Text style={styles.subTitle}>0300 1234567</Text>
          <Text style={styles.title}>Customer Details</Text>
          <Text style={styles.subTitle}>Hamid Ali</Text>
          <Text style={styles.subTitle}>0320 1234567</Text>
          <Text style={styles.title}>Paid By</Text>
          <Text style={styles.subTitle}>Hamid Ali</Text>
          <Text style={styles.subTitle}>XXXX-XXXX-XXXX-XXXX</Text>
          <Text style={styles.title}>Service Details</Text>
          <Text style={styles.subTitle}>Lahore Zoo</Text>
          <Text style={styles.subTitle}>Basic</Text>
          <Text style={styles.amountPrompt}>Amount</Text>
          <Text style={styles.amount}>$ 25</Text>
          <Button
            icon="save"
            dark={true}
            mode="contained"
            style={styles.saveInvoiceButton}
            onPress={saveInvoice}
          >
            Save As Image
          </Button>
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
  showInvoiceButton: {
    borderColor: "#F7941D",
  },
  modal: {
    backgroundColor: "white",
    width: "90%",
    alignSelf: "center",
    borderRadius: 5,
  },
  dismissButton: {
    alignSelf: "flex-end",
  },
  successIcon: {
    alignSelf: "center",
  },
  appName: {
    fontWeight: "bold",
    alignSelf: "center",
    fontSize: 18,
    color: "black",
  },
  transactionSuccessMessage: {
    color: "#F7941D",
    fontWeight: "bold",
    alignSelf: "center",
    fontSize: 20,
  },
  orderSuccessMessage: {
    color: "grey",
    fontSize: 14,
    alignSelf: "center",
    marginBottom: 24,
  },
  title: {
    marginStart: 24,
    marginTop: 8,
    color: "#F7941D",
    fontWeight: "bold",
    fontSize: 16,
  },
  subTitle: {
    marginStart: 24,
    color: "grey",
    fontSize: 14,
  },
  amountPrompt: {
    marginStart: 24,
    marginTop: 8,
    fontSize: 16,
    color: "#F7941D",
    fontWeight: "bold",
  },
  amount: {
    marginStart: 24,
    marginBottom: 24,
    color: "black",
    fontSize: 16,
  },
  saveInvoiceButton: {
    borderColor: "#F7941D",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
});

export default InvoiceScreen;
