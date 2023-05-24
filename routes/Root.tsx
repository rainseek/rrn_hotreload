import {SafeAreaView, StatusBar, ScrollView} from 'react-native';
import {Outlet} from 'react-router-native';

function Root(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Outlet />
      </ScrollView>
    </SafeAreaView>
  );
}

export default Root;
