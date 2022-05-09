import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { moderateScale, scale } from "react-native-size-matters";
import colors from "../globalStyle/colors";
import imagePath from '../globalStyle/imagePath'

const MyButton = ({ onPress, btnText, outline, btnTextStyle, rightIcon }) => {
  return (

    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.btnStyle,
        outline ? styles.outlineButton : styles.normalButton,
      ]}
    >
      <View style={styles.container}>
        <Text
          style={[
            styles.btnTextStyle,
            { color: outline ? colors.outline : colors.white },
          ]}
        >
          {btnText || "btnText"}
        </Text>
        {rightIcon ? <Image source={imagePath.iconNext} style={{ marginLeft: 8, width: 25, height: 20 }} /> : null}
      </View>


    </TouchableOpacity>


  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'



  },
  btnStyle: {
    backgroundColor: colors.btnBgColor,
    height: moderateScale(60),
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
