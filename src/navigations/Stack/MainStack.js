import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import authRoutes from '../routes/authRoutes';

const Stack = createNativeStackNavigator();

const MainStack = (props) => {


  return (
    <Stack.Navigator>
          {Object.entries(authRoutes).map(([name, screen]) => (
            <Stack.Screen
              key={name}
              name={name}
              component={screen.component}
              options={screen.options}
            />
          ))}
    </Stack.Navigator>
  );
};

export default MainStack;