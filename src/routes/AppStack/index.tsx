import React, { useEffect, useRef, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTab from "../BottomTab";
import LoginScreen from "../../screens/Auth/Login";
import CreateAccount from "../../screens/Auth/CreateAccount";
import ForgotPassword from "../../screens/Auth/ForgotPassword";
import PasswordReset from "../../screens/Auth/PasswordReset";
import NewPassword from "../../screens/Auth/NewPassword";
import WithoutLoginProfileScreen from "../../screens/Auth/WIthoutLoginProfile";
import WithLoginProfile from "../../screens/Auth/WithLoginProfile";

const Stack = createNativeStackNavigator<any>();
const AppStack = () => {
  return (
    <>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="PasswordReset" component={PasswordReset} />
        <Stack.Screen name="NewPassword" component={NewPassword} />
        <Stack.Screen name="WithoutLoginProfileScreen" component={WithoutLoginProfileScreen} />
        <Stack.Screen name="WithLoginProfile" component={WithLoginProfile} />
        <Stack.Screen name="BottomTab" component={BottomTab} />
          

      </Stack.Navigator>
    </>
  );
};
export default AppStack;
