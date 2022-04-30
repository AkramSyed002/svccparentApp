import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { moderateScale, scale } from "react-native-size-matters";
import colors from "../globalStyle/colors";

const MyButton = ({ onPress, btnText, btnStyle, btnTextStyle }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.btnStyle, { ...btnStyle }]}
    >
      <Text style={[styles.btnTextStyle, { ...btnTextStyle }]}>
        {btnText || "btnText"}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnStyle: {
    backgroundColor: colors.btnBgColor,
    height: moderateScale(60),
    // width: moderateScale(355),
  },
  btnTextStyle: {
    color: colors.white,
    fontSize: scale(16),
    fontWeight: "400",
    textAlign: "center",
  },
});

export default MyButton;
