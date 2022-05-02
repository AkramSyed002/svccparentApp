import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { moderateScale, scale } from "react-native-size-matters";
import colors from "../globalStyle/colors";

const MyButton = ({ onPress, btnText, outline, btnTextStyle }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.btnStyle,
        outline ? styles.outlineButton : styles.normalButton,
      ]}
    >
      <Text
        style={[
          styles.btnTextStyle,
          outline ? styles.textOutline : styles.textNormal,
        ]}
      >
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
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 8,

    justifyContent: "center",
  },
  normalButton: {
    backgroundColor: colors.btnBgColor,
  },
  outlineButton: {
    backgroundColor: colors.dark,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: colors.outline,
  },
  btnTextStyle: {
    color: colors.white,
    fontSize: scale(16),
    fontWeight: "400",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  textOutline: {
    color: colors.outline,
    fontSize: scale(16),
    fontWeight: "400",
    textAlign: "center",
  },
  textNormal: {
    color: colors.white,
    fontSize: scale(16),
    fontWeight: "400",
    textAlign: "center",
  },
});

export default MyButton;
