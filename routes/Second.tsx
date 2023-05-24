import React from 'react';
import {View, Text} from 'react-native';
import {Link} from 'react-router-native';

function Second(): JSX.Element {
  return (
    <View>
      <Text>Second Page</Text>
      <Link to="/">
        <Text>Go to home page ...</Text>
      </Link>
    </View>
  );
}

export default Second;
