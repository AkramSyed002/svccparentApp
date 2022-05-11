//import liraries
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import colors from '../globalStyle/colors';


// create a component
const MyComponent = ({ imagePath, time, status }) => {
	return (
		<View style={styles.container}>
			{imagePath && <Image source={imagePath} style={{ width: 50, height: 50 }} />}
			<Text style={styles.time}>{time || '44Hrs'}</Text>
			<Text style={styles.status}>{status || 'Completed'}</Text>

		</View>
	);
};

// define your styles
const styles = StyleSheet.create({
	container: {
		// flexGrow: 1,
		width: moderateScale(162),
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.inputBg,
		borderRadius: moderateScale(20),

	},

	time: {
		fontWeight: 400,
		fontSize: 18,
		lineHeight: 21,
		color: colors.white

	},
	status: {
		fontStyle: 'normal',
		fontWeight: 400,
		fontSize: 16,
		lineHeight: 19,
		color: colors.inputText


	}
});

//make this component available to the app
export default MyComponent;
