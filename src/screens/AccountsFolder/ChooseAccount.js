import React, { useState } from 'react'
import { StyleSheet, Text, View, } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Checkbox from 'expo-checkbox';
import MyHeader from '../../components/Myheader'
import colors from '../../globalStyle/colors'
import MyInputField from '../../components/MyInputField'
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import MyParagraph from '../../components/MyParagraph'
import navigationStrings from '../../navigationStrings';
import MyButton from '../../components/MyButton'


const ChooseAccount = ({ navigation }) => {
	const [isChecked, setIsChecked] = useState(false)
	return (
		<View style={styles.container}>

			<View style={{ display: 'flex', flex: 1 }} >
				<MyHeader />
				<Text style={styles.title}>Create Account</Text>
				<MyParagraph paragraph={'Join our community and start earning tuition for Sauk Valley Community College!'} />
				<View style={{ marginTop: 20 }} />
				<MyInputField title={'Email Address'} placeHolder={'example@hello.edu'} />
				<View style={{ marginTop: 20 }} />
				<MyInputField title={'Password'} placeHolder={'Enter Password'} rightIcon />
				<MyInputField placeHolder={'Confirm Password'} rightIcon />
				<View style={styles.checkboxContainer}>

					<Checkbox
						style={styles.checkbox}
						value={isChecked}
						onValueChange={setIsChecked}
						color={isChecked ? '' : colors.inputBg}
					/>
					<Text style={styles.checkboxText}>I agree to the <Text onPress={() => navigation.navigate(navigationStrings.termsOfService)} style={{ color: colors.outline }}>Terms of Service</Text> and <Text style={{ color: colors.outline }}
						onPress={() => navigation.navigate(navigationStrings.privacyPolicy)}
					>Privacy Policy</Text></Text>
				</View>
				<View style={{ marginTop: 20, display: 'flex', justifyContent: 'space-between', flexGrow: 1, }} >
					<MyInputField placeHolder={'Enter Access Code*'} rightIcon />
					<MyButton btnText={'Create Account'} />
				</View>
				<View style={{ marginTop: 20 }} />

			</View>


		</View>
	)
}

export default ChooseAccount

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.mainThem,
		paddingHorizontal: moderateVerticalScale(16),
		flexGrow: 1,
		// justifyContent: 'space-between',
	},
	title: {
		color: colors.white,
		marginTop: moderateVerticalScale(16),
		paddingVertical: moderateVerticalScale(16),
		fontStyle: "normal",
		fontWeight: 400,
		fontSize: 22,
		lineHeight: 26,
		display: "flex",
		alignItems: "center"
	},
	descriptionStyle: {
		color: colors.inputColor,
		fontWeight: scale(400),
		fontSize: scale(15.5),
		lineHeight: moderateScale(19),
		paddingVertical: moderateVerticalScale(8)
	},
	active: {
		border: '2px solid white'

	},
	checkboxContainer: { display: 'flex', flexDirection: 'row', alignItems: 'center', },
	checkbox: {
		marginTop: moderateVerticalScale(16),
		width: moderateScale(30),
		height: moderateScale(30),
	},
	checkboxText: {
		color: colors.white,
		fontWeight: moderateScale(400),
		fontSize: scale(15.5),
		lineHeight: moderateScale(19),
		paddingLeft: 20,
		marginTop: moderateVerticalScale(10)
	}
})



