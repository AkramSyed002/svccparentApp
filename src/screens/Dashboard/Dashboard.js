import React, { useState } from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import {
  StudentCompleted,
  StudentProgress,
  StudentScheduleEvents,
} from "../../components";

import colors from "../../globalStyle/colors";
import imagePath from "../../globalStyle/imagePath";
const Dashboard = () => {
  const [activeStudent, setActiveStudent] = useState({
    s1: true,
    s2: false,
    s3: false,
  });
  const [activeTab, setActiveTab] = useState({
    tab1: false,
    tab2: true,
    tab3: false,
  });

  return (
    <View style={styles.container}>
      <Text style={{ color: colors.white }}>---</Text>
      <View
        style={{
          flex: 0.4,
          // backgroundColor: "red",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "row",
            backgroundColor: colors.inputBg,
            width: moderateScale(280),
            height: moderateVerticalScale(100),
            borderRadius: moderateScale(100),
          }}
        >
          <Image source={imagePath.img1} style={{ width: 70, height: 70 }} />
          <Image source={imagePath.img2} style={{ width: 70, height: 70 }} />
          <Image source={imagePath.img3} style={{ width: 70, height: 70 }} />
        </View>
        <Text style={styles.title}>Elliot Smith </Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <Text
          style={styles.buttonsTab}
          onPress={() =>
            setActiveTab({ tab1: !activeTab.tab1, tab2: false, tab3: false })
          }
        >
          Progress
        </Text>
        <Text
          style={styles.buttonsTab}
          onPress={() =>
            setActiveTab({ tab1: false, tab2: !activeTab.tab2, tab3: false })
          }
        >
          Schedule Events
        </Text>
        <Text
          style={styles.buttonsTab}
          onPress={() =>
            setActiveTab({ tab1: false, tab2: false, tab3: !activeTab.tab3 })
          }
        >
          Completed
        </Text>
      </View>
      {activeTab.tab1 ? (
        <StudentProgress />
      ) : activeTab.tab2 ? (
        <StudentScheduleEvents />
      ) : activeTab.tab3 ? (
        <StudentCompleted />
      ) : null}
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mainThem,
    paddingHorizontal: moderateVerticalScale(16),
  },
  title: {
    color: colors.white,
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 22,
    lineHeight: 26,
    alignItems: "center",
    paddingTop: moderateVerticalScale(20),
  },
  buttonsTab: {
    fontWeight: 400,
    fontSize: 16,
    lineHight: 19,
    color: colors.white,
    fontStyle: "normal",
  },
});
const students = [
  { id: 1, name: "Jhon", image: imagePath.img1 },
  { id: 2, name: "Joie", image: imagePath.img2 },
  { id: 3, name: "Xona", image: imagePath.img3 },
];
