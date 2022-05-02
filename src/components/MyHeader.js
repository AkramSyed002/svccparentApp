import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import imagePath from '../globalStyle/imagePath'

const MyHeader = ({ }) => {
	return (
		<View>
			<TouchableOpacity>
				<Image source={imagePath.backIcon} style={{ height: 20, width: 20 }} />

			</TouchableOpacity>
		</View>
	)
}

export default MyHeader

const styles = StyleSheet.create({})