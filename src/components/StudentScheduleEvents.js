import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateVerticalScale } from 'react-native-size-matters'
import colors from '../globalStyle/colors'
import { ScheduleEventCard } from '.'

const StudentScheduleEvents = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Scheduled Events</Text>
			<View style={{ flex: 0.6, marginTop: moderateVerticalScale(20) }}>
				<ScheduleEventCard button1={true} button2={true} />
			</View>

			<View style={{ flex: .4, marginTop: moderateVerticalScale(10), marginBottom: moderateVerticalScale(10) }}>
				<ScheduleEventCard button1={false} button2={true} btnText2={"Cancel"} status={'Ten Bo Status'} />
			</View>
		</View>
	)
}

export default StudentScheduleEvents

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