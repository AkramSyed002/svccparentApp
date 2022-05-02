import React from "react";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Image,
	TouchableOpacity,
} from "react-native";
import {
	moderateScale,
	moderateVerticalScale,
	scale,
} from "react-native-size-matters";
import colors from "../globalStyle/colors";
import imagePath from "../globalStyle/imagePath";


const MyInputField = ({
	title,
	placeHolder,
	onChangeText = () => { },
	inputStyle = {},
	rightIcon,
	onPressIcon,
	...props
}) => {
	return (
		<View style={{ ...styles.inputStyle, ...inputStyle }}>
			<Text style={styles.label}>{title || "Title"}</Text>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
					// borderBottomWidth: 1,
					// borderBottomColor: colors.white,
				}}
			>
				<TextInput
					style={styles.inlineStyle}
					placeholder={placeHolder || "Placeholder"}
					onChangeText={onChangeText}
					{...props}
				/>
				{rightIcon && (
					<TouchableOpacity activeOpacity={0.8} onPress={onPressIcon}>
						<Image
							source={imagePath.backIcon}
							style={{
								width: 20,
								height: 20,
								opacity: "0.3",
							}}
						/>
					</TouchableOpacity>
				)}
			</View>
		</View>
	);
};

export default MyInputField;

const styles = StyleSheet.create({
	inputStyle: {
		borderWidth: 1,
		borderColor: colors.outline,
		borderRadius: moderateScale(4),
	},
	inlineStyle: {
		flex: 1,
		paddingVertical: moderateVerticalScale(8),
		fontSize: scale(16),
		color: colors.inputText,
		backgroundColor: colors.inputBg,
		borderRadius: 8,
		paddingHorizontal: moderateScale(8),
		paddingVertical: moderateScale(16),
	},
	label: {
		fontSize: scale(14),
		color: colors.white,
		marginBottom: moderateVerticalScale(2)
	},
});