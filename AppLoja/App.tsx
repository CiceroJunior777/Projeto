import { NativeBaseProvider } from 'native-base';
import React from 'react';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';


import { THEME } from './src/Styles/theme';
//import { Home } from './src/Screens/Home/Home';
import { Loading } from './src/components/Loading';
import { ViewItem } from './src/Screens/ViewItem/ViewItem';

export default function App() {

  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <NativeBaseProvider theme={THEME}>
      
      {fontsLoaded ? <ViewItem /> : <Loading />}
    </NativeBaseProvider>
  );
}
