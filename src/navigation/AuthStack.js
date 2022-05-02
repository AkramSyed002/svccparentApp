// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navigationStrings from '../navigationStrings';
import { ChooseAccount, CreateAccount } from '../screens';



const Stack = createNativeStackNavigator();

function AuthStack() {
	return (
		<Stack.Navigator screenOptions={{
			headerShown: false
		}}
		>
			<Stack.Screen name={navigationStrings.createAccount} component={CreateAccount} />
			<Stack.Screen name={navigationStrings.chooseAccount} component={ChooseAccount} />
		</Stack.Navigator>
	);
}

export default AuthStack;