import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateVerticalScale } from 'react-native-size-matters'
import colors from '../globalStyle/colors'
import { ScheduleEventCard } from '.'

const StudentCompleted = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Completed Events</Text>
			<View style={{ flex: 0.6, marginTop: moderateVerticalScale(20) }}>
				<ScheduleEventCard button1={true} button2={false} btnText1={"Share"} status={'Beach Cleaning'} />
			</View>

			<View style={{ flex: .4, marginTop: moderateVerticalScale(10), marginBottom: moderateVerticalScale(10) }}>
				<ScheduleEventCard button1={true} button2={false} btnText1={"Share"} status={'Beach Cleaning'} />
			</View>
		</View>
	)
}

export default StudentCompleted

const styles = StyleSheet.create({

	container: {
		flex: 1,
		backgroundColor: colors.mainThem,
		paddingHorizontal: moderateVerticalScale(16),
	},
	title: {
		color: colors.white,
		fontStyle: "normal",
		fontWeight: 400,
		fontSize: 22,
		lineHeight: 26,
		alignItems: "center",
		paddingTop: moderateVerticalScale(20),
	},
})