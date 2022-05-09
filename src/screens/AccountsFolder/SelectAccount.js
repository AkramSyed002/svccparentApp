import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AccountType from "../../components/AccountType";
import { moderateVerticalScale, moderateScale, scale } from "react-native-size-matters";
import colors from "../../globalStyle/colors";
import MyHeader from "../../components/Myheader";
import MyParagraph from "../../components/MyParagraph";
import MyButton from "../../components/MyButton";

const SelectAccount = () => {
	const [active, setActive] = useState({ tab1: false, tab2: false, });

	// const handleChangeTab = () => {
	// 	setActive({ tab1: !active.tab1, tab2: !active.tab2, });


	// }

	return (
		<View style={styles.container}>
			<View>

				<MyHeader />
				<Text style={styles.title}>Choose Account</Text>
				<MyParagraph
					paragraph="Choose the type of account you would like to create."
					paragraphStyle={{ marginBottom: moderateVerticalScale(36) }}
				/>

				<AccountType
					onPress={() => setActive({ tab1: !active.tab1, tab2: false, })}
					descriptionStyle={styles.descriptionStyle}
					title="Student"
					description="Earn tuition and fees for up to three years at SVCC"
					activeStyle={!!active?.tab1 ? styles.active : null}
				/>
				<View style={{ paddingBottom: moderateVerticalScale(20) }} />
				<AccountType
					onPress={() => setActive({ tab1: false, tab2: !active.tab2, })}
					title="Parent/Legal Guardian"
					description="Stay up to date with your child’s progress and volunteer opportunities"
					descriptionStyle={styles.descriptionStyle}
					activeStyle={!!active?.tab2 ? styles.active : null}

				/>

			</View>
			<View style={{ marginBottom: moderateVerticalScale(40) }}>

				<MyButton btnText={'Next'} onPress={() => alert('hi')} />
			</View>



		</View>
	);
};

export default SelectAccount;

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.mainThem,
		paddingHorizontal: moderateVerticalScale(16),
		flexGrow: 1,
		justifyContent: 'space-between',
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
});
