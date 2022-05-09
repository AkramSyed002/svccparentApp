import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { moderateVerticalScale, scale } from 'react-native-size-matters'
import colors from '../globalStyle/colors'

const MyParagraph = ({ paragraph, paragraphStyle }) => {
	return (
		<View>
			<Text style={[styles.paragraphStyle, { ...paragraphStyle }]}>{paragraph || 'MyParagraph'}</Text>
		</View>
	)
}

export default MyParagraph

const styles = StyleSheet.create({
	paragraphStyle: {
		color: colors.inputText,
		fontWeight: scale(400),
		fontSize: scale(16),
		lineHeight: moderateVerticalScale(19),
	}
})