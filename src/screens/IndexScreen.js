import React, { useContext } from 'react';
import { Text, StyleSheet, View, FlatList, Button} from "react-native";
import { Context as BlogContext } from '../context/BlogContext'

const IndexScreen = () => {
const { state, addBlogPost } = useContext(BlogContext)

   return (
       <View> 
            <Text> Index Screen </Text>
            <Button title='Add Post' onPress={addBlogPost}/>
             <FlatList 
                data={state}
                keyExtractor={(data) => data.title}
                renderItem={({item}) => {
                   return <Text>{item.title}</Text>
                }}
             />
            
       </View>
   );
};

      

const styles = StyleSheet.create({

});

export default IndexScreen;