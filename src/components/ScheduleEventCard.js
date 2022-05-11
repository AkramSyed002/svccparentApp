import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../globalStyle/colors'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'
import MyButton from './MyButton'

const ScheduleEventCard = ({ month, day, status, statusFromTo, button1, button2, btnText2, btnText1 }) => {
	return (
		<View style={styles.container}>
			<View style={{ flexDirection: 'row', marginTop: moderateVerticalScale(20) }}>
				<View >
					<Text style={styles.time}>{month || 'May'}</Text>
					<Text style={styles.time}>{day || "07"}</Text>
				</View>
				<View style={{ marginLeft: 8 }}>
					<Text style={styles.time}>{status || "Community Gardening"}</Text>
					<Text style={styles.status}>{statusFromTo || "2:30PM - 5:00PM"}</Text>
				</View>

			</View>
			{button1 && <View>
				<MyButton btnText={btnText1 || 'Add to Calender'} />
			</View>}
			{button2 && <View style={{ marginBottom: moderateVerticalScale(20) }}>
				<MyButton btnText={btnText2 || 'View More'} outline />
			</View>}

		</View>
	)
}

export default ScheduleEventCard

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
		alignContent: 'space-between',
		backgroundColor: colors.inputBg,
		paddingHorizontal: moderateVerticalScale(16),
		borderRadius: moderateScale(20)
	},

	time: {
		fontWeight: 400,
		fontSize: 18,
		lineHeight: 21,
		color: colors.white

	},
	status: {
		fontStyle: 'normal',
		fontWeight: 400,
		fontSize: 16,
		lineHeight: 19,
		color: colors.inputText


	}


})