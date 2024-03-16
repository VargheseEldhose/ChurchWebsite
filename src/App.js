import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import {View,Text} from 'react-native'
import HomePage from '../src/pages/HomePage'
import './App.css';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'


const Stack=createNativeStackNavigator();
function App() {
  return ( 
    <View>
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={HomePage} options={{
          title: 'My home',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}></Stack.Screen>


       
     
      </Stack.Navigator>
    </NavigationContainer>
  
   
      
   

    </View>

   
  );
}

export default App;
