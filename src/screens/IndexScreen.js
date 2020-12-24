import React, { useContext, useEffect } from 'react';
import { Text, StyleSheet, View, FlatList, Button, TouchableOpacity } from "react-native";
import { Context as BlogContext } from '../context/BlogContext'
import { AntDesign } from '@expo/vector-icons'; 


const IndexScreen = ({ navigation }) => {
  // console.log(navigation)
   const { state, removeBlogPost, getBlogPosts } = useContext(BlogContext)

   useEffect(() => {
      getBlogPosts();

   const listener = navigation.addListener('didFocus', () => {
         getBlogPosts();
      });
      
      return () => {
         listener.remove();
      };
   }, []);

   return (
      <View> 
        <FlatList 
           data={state}
           keyExtractor={(data) => data.title}
           renderItem={({item}) => {
           return ( 
             <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>  
                   <View style={styles.row}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.title}>{item.id}</Text>
                     <TouchableOpacity onPress={() => removeBlogPost(item.id)}>
                        <AntDesign style={styles.icon} name="delete" color="black" />
                     </TouchableOpacity>
                  </View>
             </TouchableOpacity>      
                  );
               }} />
       </View>
  );};

  IndexScreen.navigationOptions = ({navigation}) => {
  return {
     headerRight: () => (
       <TouchableOpacity onPress={() => navigation.navigate('Create')}>
          <View style={styles.header}>
              <Text style={styles.title}>Create</Text>
              <AntDesign style={styles.plusIcon} name="plus"  color="black" />
          </View>
       </TouchableOpacity>
     ),
   };
}  
         
const styles = StyleSheet.create({
   row: {
      flexDirection: 'row', //to show in the same line
      justifyContent: 'space-between', //add space between
      paddingVertical: 20,
      paddingHorizontal: 10,
      borderTopWidth: 1,
      borderColor: 'grey',
    
   },
   title: {
      fontSize: 18
   },
   icon: {
      fontSize: 24,
   },
   plusIcon: {
      marginRight: 20,
      fontSize: 24
   },
   header: {
     flexDirection: 'row',
     paddingVertical: 2
   }
});
     

export default IndexScreen;

 
           
 
            
   


      
