import React from "react";
import Routes from "./routes";
import { useColorScheme, Appearance } from "react-native-appearance";
import Toast from "react-native-toast-message";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setAppTheme } from "~/store/modules/payme/actions";
import colors from "./styles/colors";
import ToastComponent from "~/components/Toast";

Appearance.getColorScheme();

export default function App() {
  const dispatch = useDispatch();

  const colorScheme = useColorScheme();

  useEffect(() => {
    if (colorScheme === "dark") {
      dispatch(setAppTheme(colorScheme));
    } else {
      dispatch(setAppTheme(colorScheme));
    }
  }, [colorScheme]);

  const toastConfig = {
    success: ({ text1, text2, props, ...rest }) => (
      <ToastComponent
        color={colors.success}
        title={text1}
        subtitle={text2}
        icon="checkmark-circle-outline"
      />
    ),
    error: ({ text1, text2, props, ...rest }) => (
      <ToastComponent
        color={colors.danger}
        title={text1}
        subtitle={text2}
        icon="close-circle-outline"
      />
    ),
    info: () => {},
    any_custom_type: () => {},
  };

  return (
    <>
      <Routes />
      <Toast config={toastConfig} ref={(ref) => Toast.setRef(ref)} />
    </>
  );
}
