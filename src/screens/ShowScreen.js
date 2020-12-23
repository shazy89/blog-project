import React, {useContext} from 'react';
import { Text, StyleSheet, View } from "react-native";
import { Context } from '../context/BlogContext'

const ShowScreen = ({navigation}) => {
  // navigation.getParam('id')
 const { state } = useContext(Context)
 const bloPpost = state.find(blogPost => blogPost.id ===  navigation.getParam('id'))

   return (
       <View> 
            <Text> {bloPpost.title}</Text>
       </View>
   );
};

      

const styles = StyleSheet.create({

});

export default ShowScreen;