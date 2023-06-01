import AdminRegisterScreen from '../../Screens/Auth/AdminRegistration';
import Login from '../../Screens/Auth/Login';
import UserSelectionScreen from '../../Screens/Auth/UserSelection';
import EmployeeRegisterScreen from '../../Screens/Employee';
import { screenNames } from '../../screenNames';
// import theme from '../../styles/theme.style';

const authRoutes = {
  [screenNames.LoginScreen]: {
    name: screenNames.LoginScreen,
    component: Login,
    options: {
      title: '',
      headerShown: false,
      headerTintColor: "#76e276",
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
  [screenNames.AdminRegisterScreen]: {
    name: screenNames.AdminRegisterScreen,
    component: AdminRegisterScreen,
    options: {
      title: '',
      headerShadowVisible: false,
      headerTintColor: "#76e276",
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
  [screenNames.UserSelectionScreen]: {
    name: screenNames.UserSelectionScreen,
    component: UserSelectionScreen,
    options: {
      title: '',
      headerShadowVisible: false,
      headerTintColor: "#76e276",
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
  [screenNames.EmployeeRegisterScreen]: {
    name: screenNames.EmployeeRegisterScreen,
    component: EmployeeRegisterScreen,
    options: {
      title: '',
      headerShadowVisible: false,
      headerTintColor: "#76e276",
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
};
export default authRoutes;