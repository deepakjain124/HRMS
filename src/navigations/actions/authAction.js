import { screenNames } from "../../screenNames";

export const navigateToLoginScreen = (props, params = {}) =>
  props.navigation.navigate(screenNames.LoginScreen, params);

export const navigateToUserSelectionScreen = (props, params = {}) =>
  props.navigation.navigate(screenNames.UserSelectionScreen, params);

export const navigateToAdminRegisterScreen = (props, params = {}) =>
  props.navigation.navigate(screenNames.AdminRegisterScreen, params);

export const navigateToEmployeeRegisterScreen = (props, params = {}) =>
  props.navigation.navigate(screenNames.EmployeeRegisterScreen, params);


export default {
  navigateToLoginScreen,
  navigateToUserSelectionScreen,
  navigateToAdminRegisterScreen,
  navigateToEmployeeRegisterScreen,
};