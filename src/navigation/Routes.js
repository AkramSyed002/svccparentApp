import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import HomeStack from './HomeStack';
export default function Routes() {
	const [user, setUser] = useState(true)
	return (
		<NavigationContainer>{user ? <AuthStack /> : <HomeStack />}</NavigationContainer>
	);
}