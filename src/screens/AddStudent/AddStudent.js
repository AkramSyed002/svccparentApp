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
import { Button } from 'react-native-web';


const AddStudent = ({ navigation }) => {
	const [isChecked, setIsChecked] = useState(false)
	return (
		<View style={styles.container}>

			<View style={{ flex: 0.5 }} >
				<MyHeader />
				<Text style={styles.title}>Add a student </Text>
				<MyParagraph paragraph={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} />
				<View style={{ marginTop: 20 }} />
				<MyInputField title={'Email Address'} placeHolder={'Email Address'} />
				<View style={{ marginTop: 20 }} />
				<MyInputField title={'Confirm Email Address'} placeHolder={'Email Address'} />

			</View>
			<View style={{ flex: 0.5, flexGrow: 1, justifyContent: 'flex-end' }}>
				<MyButton btnText={'Continue'} />
				<View style={{ marginTop: 20 }} />

			</View>





		</View>
	)
}

export default AddStudent

const styles = StyleSheet.create({
	container: {
		flex: 1,
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



