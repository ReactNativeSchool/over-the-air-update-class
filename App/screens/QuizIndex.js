import React from 'react';
import {ScrollView, StatusBar, Button} from 'react-native';
import codePush from 'react-native-code-push';

import spaceQuestions from '../data/space';
import westernsQuestions from '../data/westerns';
import computerQuestions from '../data/computers';

import {RowItem} from '../components/RowItem';
import {codePushDeploymentKey} from '../../index';

export default ({navigation}) => (
  <ScrollView>
    <StatusBar barStyle="dark-content" />

    <Button
      title="Check for Updates"
      onPress={() => {
        codePush.checkForUpdate(codePushDeploymentKey).then(update => {
          if (!update) {
            alert('App is up to date!');
          } else {
            navigation.push('Updating');
          }
        });
      }}
    />

    <RowItem
      name="Space"
      color="#36b1f0"
      onPress={() =>
        navigation.navigate('Quiz', {
          title: 'Space',
          questions: spaceQuestions,
          color: '#36b1f0',
        })
      }
    />
    <RowItem
      name="Westerns"
      color="#799496"
      onPress={() =>
        navigation.navigate('Quiz', {
          title: 'Westerns',
          questions: westernsQuestions,
          color: '#799496',
        })
      }
    />
    <RowItem
      name="Computers"
      color="#49475B"
      onPress={() =>
        navigation.navigate('Quiz', {
          title: 'Computers',
          questions: computerQuestions,
          color: '#49475B',
        })
      }
    />
  </ScrollView>
);
