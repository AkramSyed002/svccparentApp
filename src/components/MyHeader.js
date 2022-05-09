import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import {
	moderateScale,
	moderateVerticalScale,
} from "react-native-size-matters";
import imagePath from "../globalStyle/imagePath";
import colors from "../globalStyle/colors";

const MyHeader = ({ navigation, onPress, screenTitle }) => {
	const { goBack } = useNavigation();
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={() => (!!onPress ? onPress : goBack())}>
				<Image source={imagePath.backIcon} style={{ height: 10, width: 10 }} />
			</TouchableOpacity>
			<Text style={{ color: colors.white }}>{screenTitle || ""}</Text>
			<Text></Text>
		</View>
	);
};

export default MyHeader;

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'row',
		marginTop: moderateVerticalScale(24),
		marginBottom: moderateVerticalScale(8),
		alignItems: "center",
		justifyContent: "space-between",
	},
});
