import React from 'react';
import {Text, View} from 'react-native';
import {Header} from 'react-native/Libraries/NewAppScreen';
import {Link} from 'react-router-native';

function Home(): JSX.Element {
  return (
    <>
      <Header />
      <View>
        <Text>Home Page</Text>
        <Link to="/second">
          <Text>Go to second page ...</Text>
        </Link>
      </View>
    </>
  );
}

export default Home;
