import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import MyButton from '../../components/MyButton'
import imagePath from '../../globalStyle/imagePath'
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import colors from '../../globalStyle/colors';
import navigationStrings from '../../navigationStrings';

const CreateAccount = ({ navigation }) => {

	const handleLogin = () => { }
	const handleCreateAccount = () => {
		navigation.navigate(navigationStrings.chooseAccount)
	}

	return (
		<View style={styles.container}>
			<View style={styles.topView}>

				<Image source={imagePath.logo} style={styles.logoStyle} />
			</View>
			<View style={styles.bottomView}>
				<View>

					<Text style={styles.text1Style}>Welcome!</Text>
					<Text style={styles.text2Style}>Building bright futures through earned tuition.</Text>
				</View>
				<View style={{ width: '90%', marginBottom: moderateVerticalScale(36) }}>

					<MyButton btnText='Login' />
					<View style={{ marginTop: moderateVerticalScale(16) }} />
					<MyButton btnText='Create Account' outline onPress={handleCreateAccount} />
				</View>
			</View>
		</View>
	)
}

export default CreateAccount

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// paddingHorizontal: moderateScale(20),
		// backgroundColor: 'red'
	},
	topView: {
		flex: 0.5,
		backgroundColor: colors.white,
		alignItems: 'center'
	},
	bottomView: {
		flex: 0.5,
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: colors.dark
	},
	logoStyle: {
		width: moderateScale(335),
		height: moderateScale(335),
	},
	text1Style: {
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: scale(22),
		color: colors.white,
	},
	text2Style: {
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: scale(16),
		color: '#7C8795',



	}
})