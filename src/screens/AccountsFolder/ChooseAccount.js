import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import MyHeader from '../../components/Myheader'
import colors from '../../globalStyle/colors'
import MyInputField from '../../components/MyInputField'
import { moderateVerticalScale } from 'react-native-size-matters';

const ChooseAccount = ({ navigation }) => {
	return (
		<SafeAreaView style={{
			backgroundColor: colors.mainThem,
			paddingHorizontal: moderateVerticalScale(16),
			paddingTop: 16
		}}>
			<MyHeader />

			<View>
				<Text>ChooseAccount</Text>
				<MyInputField />
			</View>
		</SafeAreaView>
	)
}

export default ChooseAccount

const styles = StyleSheet.create({})