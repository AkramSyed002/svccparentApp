import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import imagePath from '../globalStyle/imagePath'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'
import ProgressBarCard from './ProgressBarCard'
import { CardDuration } from '.'


const StudentProgress = () => {
	return (
		<>
			<View style={{ flex: 0.3, marginTop: moderateScale(20) }}>
				<ProgressBarCard />
			</View>
			<View
				style={{
					marginTop: moderateVerticalScale(20),

					flexDirection: "row",
					flexGrow: 0.3,
					alignContent: "space-between",
					justifyContent: "space-between",
				}}
			>
				<CardDuration imagePath={imagePath.calender} />
				<CardDuration imagePath={imagePath.clock} />
			</View>
			<View style={{ marginBottom: moderateVerticalScale(20) }} />
		</>
	)
}

export default StudentProgress

const styles = StyleSheet.create({})