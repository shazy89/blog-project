import React, {useState, useContext} from 'react';
import { Text, StyleSheet, View, TextInput, Button } from "react-native";
import { Context } from '../context/BlogContext'

const CreateScreen = ({navigation}) => {
  const [title, settitle] = useState('');
  const [content, setContent] = useState('');
//console.log(title)
  const { addBlogPost } = useContext(Context)
   return (
       <View> 
            <Text style={styles.label}> Enter Title:</Text>
            <TextInput style={styles.input} value={title} onChangeText={(text) => settitle(text)}/>
            <Text style={styles.label}> Create Contetnt:</Text>
            <TextInput style={styles.input} value={content} onChangeText={(text) => setContent(text)}/>
            <Button 
               title='Add Blog Post'
               onPress={() => addBlogPost(title, content)}  />
       </View>
   );
};

      

const styles = StyleSheet.create({
   input: {
     fontSize: 18,
     borderWidth: 1,
     borderColor: 'black',
     marginBottom: 15,
     padding: 5,
     margin: 5,
     borderRadius: 10
    },
    label: {
     fontSize: 18,
     marginBottom: 5,
    }
 });
 
 export default CreateScreen;
