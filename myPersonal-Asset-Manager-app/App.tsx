/**
 * To finalize installation of react-native-gesture-handler,
 * add the following at the top (make sure it's at the top and there's nothing else before it) 
 * of your entry file, such as App.tsx:
 */
 import 'react-native-gesture-handler';

 import React from 'react';
 import { Image, StyleSheet } from 'react-native';
 // Before rendering any navigation stack, enableScreens for memory optimisation. See https://reactnavigation.org/docs/react-native-screens/
 import { enableScreens } from 'react-native-screens';
 enableScreens();
 
 /** 
  * Import createStackNavigator that we will use to create the stack navigator for the home page
  We shall see below how they are used
  */
 import { createStackNavigator } from '@react-navigation/stack';
 /** 
  * Import NavigationContainer that we will use to wrap the stack we will create.
 See in App component below how it is used
  */
 import { NavigationContainer } from '@react-navigation/native';
 
 /**
  * Import our components that we will create screens for.
  * Among them is a new Component named Home which will simply contain Button links to 
  * each of the other Component screens.
  * See Home.tsx for implementation for the said Home Component
  */
 import Home from './src/Home';
 import Component3 from './src/components/Component3';
 import Component7 from './src/components/Component7';
 
 //Create the Stack object
 const Stack = createStackNavigator();
 //if we want to pass initial parameters to the App Stack, we can first organize the typing as we did for HomeScreen in Home.tsx
 //We will then have to use initialParams in each Stack.Screen to indicate the params specified in types
 //e.g. for Component1Screen would be initialParams={{demoInitialParam:string}}
 /*
 type AppStackParamList = {
   HomeScreen: undefined; //no parameters expected to be passed to route when called
   Component1Screen: {demoInitialParam:string};
   Component2Screen: {title:string} | undefined; //means that title may be optionally passed
   Component4Screen: undefined;
   Component5Screen: undefined;
   Component6Screen: undefined;
   Component7Screen: undefined;
   Component8Screen: undefined;
   Component9Screen: undefined;
 };
 const Stack = createStackNavigator<AppStackParamList>();
 */
 
 
 //See https://reactnavigation.org/docs/stack-navigator/ for info on the prop elements for Stack.Navigator.
 
 //Prepare the App Stack with the Screens
 const AppStack = () => {
   return(
     <Stack.Navigator
       initialRouteName='HomeScreen' 
       //no longer supported
      // mode='card'
      // headerMode='screen'
      // keyboardHandlingEnabled={true}
       screenOptions={{
         headerStyle: {
           backgroundColor: 'green',
           height: 150
         },
         headerTintColor: '#fff',
         headerTitleStyle: {
           fontWeight: 'bold',
           paddingTop: 60,
           paddingBottom: 10
         },
         headerRight: () => (
           <Image style={styles.logo}
             source={require('./src/img/PAU-Logo-Website.png')}
           />
         ),
         headerTitleAlign: 'left',
         headerRightContainerStyle:{//there is also headerLeftContainerStyle if we want to use it
           paddingBottom: 33
         }
       }} 
     >
       <Stack.Screen name="HomeScreen" component={Home} options={{title: 'Personal Asset Manager'}}/>
       <Stack.Screen name="Component3Screen" component={Component3} options={{title: 'Component 3'}}/>
       <Stack.Screen name="Component7Screen" component={Component7} options={{title: 'Component 7'}}/>
     </Stack.Navigator>
   )
 }
 
 //Pass the prepared AppStack to App wrapping it in NavigatorContainer
 const App: React.FC = () => {
   return (
     <NavigationContainer>
       <AppStack />
     </NavigationContainer>
   );
 }
 
 const styles = StyleSheet.create({
   logo:{
     width: 133,
     height: 55,
     paddingBottom: 50
   }
 });
 
 export default App;