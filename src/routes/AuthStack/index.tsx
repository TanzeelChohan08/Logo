import React, { useEffect, useRef, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../../screens/Auth/Login";
import WithoutLoginProfileScreen from "../../screens/Auth/WIthoutLoginProfile";
import CreateAccount from "../../screens/Auth/CreateAccount";
import ForgotPassword from "../../screens/Auth/ForgotPassword";
import PasswordReset from "../../screens/Auth/PasswordReset";
import NewPassword from "../../screens/Auth/NewPassword";

const Stack = createNativeStackNavigator<any>();
const AuthStack = () => {
  return (
    <>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="PasswordReset" component={PasswordReset} />
        <Stack.Screen name="NewPassword" component={NewPassword} />
        <Stack.Screen name="WithoutLoginProfileScreen" component={WithoutLoginProfileScreen} />
      </Stack.Navigator>
    </>
  );
};
export default AuthStack;
