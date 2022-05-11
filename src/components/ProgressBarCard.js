import React, { useState } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Slider from '@react-native-community/slider';
import colors from '../globalStyle/colors'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'
import imagePath from '../globalStyle/imagePath'

const ProgressBarCard = ({ }) => {
	const [minVal, setMinVal] = useState(0);
	const [maxVal, setMaxVal] = useState(25);
	return (
		<View style={styles.container}>
			<View style={{ flex: 0.6, flexDirection: 'row' }}>
				<View style={{ flex: 0.2, justifyContent: 'center', }}>
					<Image source={imagePath.ribbon} style={{ width: 50, height: 60 }} />
				</View>
				<View style={{ flex: 0.8, justifyContent: 'center', }}>
					<Text style={styles.level}>Level 2</Text>
					<Text style={styles.levelDescription}>You will level up after every 25 hours completed.</Text>
				</View>
			</View>
			<View style={{ flex: 0.4, flexDirection: 'row', alignItems: 'center' }}>

				<Text style={styles.level}>{minVal}</Text>
				<Slider


					style={{ width: 200, height: 40 }}
					value={20}
					minimumValue={minVal}
					maximumValue={maxVal}
					minimumTrackTintColor={colors.outline}
					maximumTrackTintColor={colors.inputText}

				/>
				<Text style={styles.level}>{maxVal}</Text>

			</View>

		</View>
	)
}

export default ProgressBarCard

const styles = StyleSheet.create({
	container: {
		borderRadius: moderateScale(20),
		flex: 1,
		backgroundColor: colors.inputBg,
		paddingHorizontal: moderateVerticalScale(16),

	},
	level: {

		color: colors.white,
		fontSize: 18,
		fontWeight: 400,
		lineHeight: 21,
	},
	levelDescription: {
		marginTop: moderateVerticalScale(8),
		color: colors.inputText,
		fontStyle: 'normal',
		fontWeight: 400,
		fontSize: 16,
		lineHeight: 19,
	}

})