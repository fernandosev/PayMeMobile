export function setAppTheme(theme = "") {
  return {
    type: "@payme/SET_APP_THEME",
    payload: { theme },
  };
}
