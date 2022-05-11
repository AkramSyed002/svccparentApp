// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navigationStrings from '../navigationStrings';
import { AddStudent, ChooseAccount, CreateAccount, PrivacyPolicy, SelectAccount, TermsServices, Login, Dashboard } from '../screens';



const Stack = createNativeStackNavigator();

function AuthStack() {
	return (
		<Stack.Navigator screenOptions={{
			headerShown: false
		}}
		>

			<Stack.Screen name={navigationStrings.dashboard} component={Dashboard} />
			<Stack.Screen name={navigationStrings.login} component={Login} />
			<Stack.Screen name={navigationStrings.addStudent} component={AddStudent} />
			<Stack.Screen name={navigationStrings.chooseAccount} component={ChooseAccount} />
			<Stack.Screen name={navigationStrings.selectAccount} component={SelectAccount} />
			<Stack.Screen name={navigationStrings.createAccount} component={CreateAccount} />
			<Stack.Screen name={navigationStrings.termsOfService} component={TermsServices} />
			<Stack.Screen name={navigationStrings.privacyPolicy} component={PrivacyPolicy} />

			{/* this will be send to home stack when this completed */}


		</Stack.Navigator>
	);
}

export default AuthStack;