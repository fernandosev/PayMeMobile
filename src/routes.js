import React from "react";
import { StatusBar } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import { navigationRef } from "~/services/NavigationService";

import colors from "~/styles/colors";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Payment from "./screens/Payment";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <>
      <StatusBar backgroundColor={colors.primaryColor} />
      <NavigationContainer ref={navigationRef}>
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
              }

              // You can return any component that you like here!
              return <FontAwesome5 name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: colors.secondaryColor,
            inactiveTintColor: colors.inactiveBlack,
          }}
        >
          <Tab.Screen name="Payment" component={Payment} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
