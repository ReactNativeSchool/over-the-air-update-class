import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import QuizIndex from './screens/QuizIndex';
import Quiz from './screens/Quiz';
import Updating from './screens/Updating';

const Stack = createStackNavigator();

export default () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="QuizIndex"
        component={QuizIndex}
        options={{title: 'Quizzes'}}
      />
      <Stack.Screen
        name="Quiz"
        component={Quiz}
        options={({route}) => ({
          headerTitle: route.params.title,
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: route.params.color,
            borderBottomColor: route.params.color,
          },
        })}
      />
      <Stack.Screen
        name="Updating"
        component={Updating}
        options={{presentation: 'modal'}}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
