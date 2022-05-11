import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import colors from '../../globalStyle/colors'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'
import imagePath from '../../globalStyle/imagePath'
import { MyHeader, MyButton, MyParagraph, MyInputField, } from '../../components'
import navigationStrings from '../../navigationStrings';
const Login = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<MyHeader />
			<Text style={styles.title}>Welcome Back!</Text>
			<MyParagraph paragraph={'Please enter your login information.'} />
			<MyInputField title={'Email Address'} />
			<View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
				<View style={{
					flex: .8,
					marginTop: moderateVerticalScale(8),
				}}>
					<MyInputField title={'Password'} />
				</View>
				<View style={{
					flex: .2,
					justifyContent: 'center',
					alignItems: 'center',

				}}>
					<TouchableOpacity onPress={() => alert('finger')} style={{ marginTop: moderateVerticalScale(36) }}>
						<Image source={imagePath.iconFinger} style={{ width: moderateScale(40), height: moderateScale(40) }} />
					</TouchableOpacity>
				</View>
			</View>
			<View style={{ marginTop: moderateVerticalScale(8), justifyContent: 'space-between', flexDirection: 'column', flex: .5 }}>
				<Text onPress={() => alert('hi')} style={{ color: colors.white, textAlign: 'end' }}>Forgot Password?</Text>

				<MyButton btnText={'Login'} onPress={() => navigation.navigate(navigation.navigate(navigationStrings.dashboard))} />
			</View>
			<View style={{ flex: .5, justifyContent: 'flex-end', marginBottom: moderateVerticalScale(24) }}>
				<Text style={{ color: colors.inputText, textAlign: 'center', }}>Don’t have an account? <Text style={{ color: colors.white }} onPress={() => navigation.navigate(navigationStrings.chooseAccount)}>Create an account</Text> </Text>
			</View>

		</View>
	)
}

export default Login

const styles = StyleSheet.create({

	container: {
		flex: 1,
		backgroundColor: colors.mainThem,
		paddingHorizontal: moderateVerticalScale(16),

	}, title: {
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

})