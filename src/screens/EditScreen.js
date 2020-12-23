import React, {useState} from 'react';
import { Text, StyleSheet, View, Image, TextInput, ImageBackground } from "react-native";


const EditScreen = ({navigation}) => {
   console.log( navigation.getParam('id'))

   return (
       <View> 
            <Text> Edit Screen</Text>
       </View>
   );
};

const styles = StyleSheet.create({

});

export default EditScreen;
      
