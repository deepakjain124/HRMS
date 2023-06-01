import {
  Button,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useFormik} from 'formik';
import * as yup from 'yup';
import React from 'react';
import authAction from '../../../navigations/actions/authAction';
import { Images } from '../../../assets';

const validationSchema = yup.object().shape({
  phone_number: yup.number().required('Please, Enter phone number!'),
  password: yup.string().required('Please, Enter password!'),
});
const Login = (props) => {
  const {
    handleChange,
    handleSubmit,
    handleBlur,
    values,
    errors,
    touched,
    setErrors,
  } = useFormik({
    initialValues: {phone_number: ''},
    onSubmit: ({phone_number}) => {
      const values = {phone_number: `${code}${phone_number}`};
      authAction.navigateToUserSelectionScreen(props);

    },
    validationSchema,
  });
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <StatusBar barStyle="dark-content" backgroundColor={'white'} />
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled">
        <View
          style={{
            alignItems: 'center',
          }}>
          <Image
            source={Images.Logo}
            style={{width: 350, height: 250}}
          />
        </View>
        <Text style={styles.loginHeading}>LogIn To HRMS</Text>
        <View style={styles.inputfields}>
          <TextInput
            style={styles.inputs}
            onChangeText={handleChange('phone_number')}
            onBlur={handleBlur('phone_number')}
            value={values.phone_number}
            maxLength={10}
            keyboardType="number-pad"
            placeholderTextColor={'black'}
            placeholder="Enter Mobile Number."
          />
          <Text style={styles.errorText}>
            {touched['phone_number'] && errors['phone_number']
              ? errors['phone_number']
              : ''}
          </Text>
          <TextInput
            style={styles.inputs}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            keyboardType="name-phone-pad"
            placeholderTextColor={'black'}
            placeholder="Enter Password."
          />
          <Text style={styles.errorText}>
            {touched['password'] && errors['password']
              ? errors['password']
              : ''}
          </Text>
          <TouchableOpacity>
            <View style={styles.button}>
              <Text style={styles.BtnText}>Login</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
              <Text style={styles.Already}>Already have an account? 
              <Text onPress={()=>authAction.navigateToUserSelectionScreen(props)} style={{color:"#76e276"}}> Sign Up</Text>
              </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    height: '100%',
    width: '100%',
  },
  loginHeading: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 24,
  },
  inputfields: {
    width: '80%',
    marginTop: 25,
  },
  inputs: {
    backgroundColor: '#ffffff',
    color: 'black',
    paddingLeft: 20,
    fontSize: 15,
    borderRadius: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    marginTop: 15,
    padding: 10,
    // Platform-specific shadow properties
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        shadowOpacity: 0.5,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 2,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  button: {
    backgroundColor: '#76e276',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  errorText: {
    color: 'red',
    paddingTop: 5,
    fontSize: 12,
  },
  BtnText: {
    color: 'white',
    fontSize: 20,
  },
  Already:{
    color:"black",
    textAlign:"center",
    marginTop:5,
  }
});
