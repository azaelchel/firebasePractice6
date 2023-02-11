import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { app, ref, set, getDatabase } from './config/firebase';
import { useState, useEffect } from "react";
import Inputs from './components/registro';


export default function App() {
 /* useEffect( () => {
    const database = getDatabase(app);
    const id = crypto.randomUUID().toString();
    set(ref(database,`users/${id}`), {
      email:"aza@gmial.com",
      name:"azael",
      age:"20"
    });
  }, []);*/

  return (
    <View style={styles.container}>
     {/* <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" /> */}
      <Inputs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
