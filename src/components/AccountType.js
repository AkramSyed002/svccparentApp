import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../globalStyle/colors'
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';

const AccountType = ({ title, description, descriptionStyle, activeStyle, onPress }) => {

	return (

		<View style={[styles.container, activeStyle]} onStartShouldSetResponder={onPress}>
			<View style={styles.mainView}>

				<Text style={styles.title}>{title || 'title'}</Text>
				<Text style={[styles.descriptionStyle, descriptionStyle]}>{description || 'description'}</Text>

			</View>
		</View >
	)
}

export default AccountType

const styles = StyleSheet.create({


	container: {
		backgroundColor: colors.inputBg,
		paddingHorizontal: 16,
		borderRadius: 8,
	},
	mainView: {
		height: moderateVerticalScale(124),
		padding: moderateScale(16),
		backgroundColor: colors.inputBg,
		borderRadius: moderateScale(8)

	},
	title: {
		color: colors.white,
		fontStyle: "normal",
		fontWeight: moderateScale(400),
		fontSize: scale(18),
		lineHeight: moderateScale(22),
	},

	descriptionStyle: {
		color: colors.white,
	}
})