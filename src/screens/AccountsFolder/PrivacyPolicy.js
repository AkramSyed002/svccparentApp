import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyHeader from '../../components/Myheader'
import colors from '../../globalStyle/colors'
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters'

const PrivacyPolicy = () => {
	return (
		<View style={styles.container}>
			<MyHeader screenTitle={'Privacy Policy'} />

			<Text style={styles.textStyle} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin faucibus ut tempus leo, mi massa mauris consectetur suspendisse. Dignissim at neque bibendum tempor, vestibulum, massa posuere ut mauris. Non cras egestas curabitur nunc in integer. Tempor, faucibus scelerisque vitae ipsum ornare. Sagittis viverra volutpat orci tempus est sed eget massa, in. Turpis montes, quis et ullamcorper massa venenatis montes. Vulputate auctor sit vitae id. Blandit posuere molestie neque ipsum, praesent arcu fermentum, vel. Nulla arcu tempus et, tincidunt augue. Lectus ipsum sit pellentesque dis ipsum aliquet ac.

				Risus et sit magna urna nibh. Ac sem ut consequat venenatis. Bibendum nisl ac pellentesque quam vitae sed sit laoreet. Interdum nibh est blandit ultrices praesent malesuada id viverra. Urna in maecenas lobortis dui. Nisl, fames ultrices nunc, sed. Felis sem lectus arcu, justo convallis morbi dui sed. Amet, dignissim tincidunt eget pellentesque elit lorem elementum, egestas. Egestas commodo pretium, vel pellentesque tincidunt adipiscing tincidunt adipiscing porta. Semper porttitor nisi orci fermentum id consectetur amet pulvinar potenti.
			</Text>
		</View>
	)
}

export default PrivacyPolicy

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.mainThem,
		paddingHorizontal: moderateVerticalScale(16),
		color: colors.white,
		flexGrow: 1,

	},
	textStyle: {
		color: colors.white,
		fontWeight: moderateScale(400),
		fontSize: scale(15.5),
		lineHeight: moderateScale(19),
	}
})