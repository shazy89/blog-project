import React, {useContext} from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Context } from '../context/BlogContext'
import { AntDesign } from '@expo/vector-icons'; 

const ShowScreen = ({navigation}) => {
  // navigation.getParam('id')
 const { state } = useContext(Context)
 const bloPpost = state.find(blogPost => blogPost.id ===  navigation.getParam('id'))

   return (
       <View> 
            <Text> {bloPpost.title}</Text>
            <Text> {bloPpost.content}</Text>
       </View>
   );
};

ShowScreen.navigationOptions = ({navigation}) => {
    return {
       headerRight: () => (
         <TouchableOpacity onPress={() => navigation.navigate('Edit', {id: navigation.getParam('id') })
         }>
            <View style={styles.header}>
                <Text style={styles.title}>Edit</Text>
                <AntDesign style={styles.plusIcon} name="edit"  color="black" />
            </View>
         </TouchableOpacity>
       ),
     };
 };

 const styles = StyleSheet.create({
     header: {
         flexDirection: 'row',
         paddingVertical: 2,
     },
      plusIcon: {
         marginRight: 20,
         fontSize: 24
      },
      title: {
         fontSize: 18
      },
    });
    
    export default ShowScreen;
 
 
 
      


