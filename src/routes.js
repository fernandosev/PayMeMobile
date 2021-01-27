import React from "react";
import { StatusBar } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useSelector } from "react-redux";

import { navigationRef } from "~/services/NavigationService";

import colors from "~/styles/colors";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Screens
import Payment from "~/screens/Payment";
import Cards from "~/screens/Cards";
import Profile from "~/screens/Profile";
import SignIn from "~/screens/SignIn";
import SignUp from "~/screens/SignUp";
import ValidateAccount from "~/screens/ValidateAccount";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Routes() {
  const token = useSelector((state) => state.user.token);
  const status = useSelector((state) => state.user.status);
  return (
    <>
      <StatusBar backgroundColor={colors.primaryColor} />
      <NavigationContainer ref={navigationRef}>
        {!token && (
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
          </Stack.Navigator>
        )}

        {token && status !== "active" && (
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="ValidateAccount" component={ValidateAccount} />
          </Stack.Navigator>
        )}

        {token && status === "active" && (
          <Tab.Navigator
            initialRouteName="Payment"
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                switch (route.name) {
                  case "Payment": {
                    iconName = "donate";
                    break;
                  }

                  case "Cards": {
                    iconName = "credit-card";
                    break;
                  }

                  case "Profile": {
                    iconName = "user-alt";
                    break;
                  }
                }

                return (
                  <FontAwesome5 name={iconName} size={size} color={color} />
                );
              },
            })}
            tabBarOptions={{
              activeTintColor: colors.white,
              inactiveTintColor: colors.inactiveWhite,
              tabStyle: {
                backgroundColor: colors.primaryColor,
              },
            }}
          >
            <Tab.Screen name="Profile" component={Profile} />
            <Tab.Screen name="Payment" component={Payment} />
            <Tab.Screen name="Cards" component={Cards} />
          </Tab.Navigator>
        )}
      </NavigationContainer>
    </>
  );
}
