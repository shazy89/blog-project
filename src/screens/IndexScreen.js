import React, { useContext } from 'react';
import { Text, StyleSheet, View, FlatList, Button} from "react-native";
import { Context as BlogContext } from '../context/BlogContext'
import { AntDesign } from '@expo/vector-icons'; 

const IndexScreen = () => {
const { state, addBlogPost } = useContext(BlogContext)

   return (
       <View> 
            <Button title='Add Post' onPress={addBlogPost}/>
             <FlatList 
                data={state}
                keyExtractor={(data) => data.title}
                renderItem={({item}) => {
                   return ( 
                      <View style={styles.row}>
                        <Text style={styles.title}>{item.title}</Text>
                        <AntDesign style={styles.icon} name="delete" color="black" />
                     </View>
                   );
                }}
             />
       </View>
   );
};
            
   


      

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
       fontSize: 24
    }
});

export default IndexScreen;