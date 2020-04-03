import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class Btn extends Component {
  render() {
    return (
      <View>
        <Button
          onPress={() =>
            dispatch({
              type: TYPES.Topla,
              a,
              b,
            })
          }
          title="topla"
        />{' '}
      </View>
    );
  }
}
