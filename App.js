import React,{useEffect} from 'react';
import { View, Text, Platform, SafeAreaView } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

export default function App() {
  useEffect(()=>{
    if(Platform.OS === 'android')
    SplashScreen.hide();
  },[])
  return (
    <SafeAreaView>
      <View>
        <Text>App</Text>
      </View>
    </SafeAreaView>
  );
}
