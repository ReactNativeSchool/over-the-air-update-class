import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// import {createAppContainer} from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack';

import QuizIndex from './screens/QuizIndex';
import Quiz from './screens/Quiz';

// const MainStack = createStackNavigator({
//   QuizIndex: {
//     screen: QuizIndex,
//     navigationOptions: {
//       headerTitle: 'Quizzes',
//     },
//   },
//   Quiz: {
//     screen: Quiz,
//     navigationOptions: ({navigation}) => ({
//       headerTitle: navigation.getParam('title'),
//       headerTintColor: '#fff',
//       headerStyle: {
//         backgroundColor: navigation.getParam('color'),
//         borderBottomColor: navigation.getParam('color'),
//       },
//     }),
//   },
// });

// export default createAppContainer(MainStack);

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
    </Stack.Navigator>
  </NavigationContainer>
);
