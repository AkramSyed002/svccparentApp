import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AccountType from '../../components/AccountType'
import { moderateVerticalScale } from 'react-native-size-matters';
import colors from '../../globalStyle/colors';

const SelectAccount = () => {
	return (
		<View style={{ background: colors.mainThem, paddingHorizontal: moderateVerticalScale(8) }}>
			<Text>SelectAccount</Text>
			<AccountType title='Student' description="Earn tuition and fees for up to three years at SVCC" />
			<View style={{ paddingBottom: moderateVerticalScale(20) }} />
			<AccountType title='Parent/Legal Guardian' description='Stay up to date with your child’s progress and volunteer opportunities' />
		</View>
	)
}

export default SelectAccount

const styles = StyleSheet.create({})