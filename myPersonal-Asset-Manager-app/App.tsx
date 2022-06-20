import React from 'react';
import { View, StyleSheet, KeyboardAvoidingView, ScrollView, Image, SafeAreaView, Platform } from 'react-native';
import Component3 from './src/components/Component3';
import Component7 from './src/components/Components7';

//Let's create a simple separator component that will only be used here in App.tsx
const Separator: React.FC = () => {
  return <View style={styles.separator}></View>
}

const App: React.FC = () => {

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.container}>
        <ScrollView>
          <View style={styles.screenHeader}>
            <Image style={styles.logo}
              source={require('./src/img/PAU-Logo-Website.png')}
            />
          </View>
          <View style={styles.screenBody}>
            <Component3 />
            <Separator />
            <Component7 />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
  /*
  return(
    <SafeAreaView style={[styles.container, {paddingTop: 30}]}>
      <Component8 />
    </SafeAreaView>
  );
  */
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: 15
  },
  separator: {
    backgroundColor: '#eee',
    height: 3,
    width: '100%'
  },
  screenHeader: {
    flex: 1,
    paddingTop: 27,
    justifyContent: 'center',
    backgroundColor: 'darkblue'
  },
  screenBody: {
    flex: 6,
    justifyContent: 'center',
  },
  logo: {
    alignSelf: 'center',
    width: 200,
    height: 82
  }
});

export default App;