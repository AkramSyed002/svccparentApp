import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../globalStyle/colors'
import { moderateScale } from 'react-native-size-matters';

const AccountType = ({ title, description }) => {
	return (
		<View style={styles.container}>
			<View style={styles.mainView}>

				<Text style={styles.title}>{title || 'tile'}</Text>
				<Text styles={styles.description}>{description || 'descrtipn'}</Text>
			</View>
		</View>
	)
}

export default AccountType

const styles = StyleSheet.create({

	container: {
		backgroundColor: colors.inputBg,
		paddingHorizontal: 16,
		borderRadius: 8
	},
	mainView: {
		height: moderateScale(104),
		padding: 16,
		backgroundColor: colors.inputBg,
		borderRadius: moderateScale(8)

	},
	title: {
		color: colors.white
	},
	description: {
		color: colors.white
	}
})