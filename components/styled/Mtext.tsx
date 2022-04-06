import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Mtext = (props: Text["props"]) => (
  <Text
    children={props.children}
    style={[props.style, { fontFamily: "montserrat" }]}
  />
);
export default Mtext;

const styles = StyleSheet.create({});
