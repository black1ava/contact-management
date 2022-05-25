import { useState, useEffect, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import StackNavigation from './Routes/StackNavigation';

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(function(){
    async function prepare(){
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          'macondo-regular': require('./assets/fonts/Macondo-Regular.ttf')
        });
      }catch(e){
        console.warn(e);
      }finally{
        setFontLoaded(true);
      }
    }

    prepare();
  }, []);

  const handleLayout = useCallback(async function(){
    if(fontLoaded){
      await SplashScreen.hideAsync();
    }
  },[fontLoaded]);

  if(!fontLoaded){
    return null;
  }

  return (
    <View onLayout={ handleLayout } style={styles.container}>
      <StackNavigation />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10
  },
});
