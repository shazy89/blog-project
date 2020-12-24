import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Button} from "react-native";


const BlogPostForm = () => {
    const [title, settitle] = useState('');
    const [content, setContent] = useState('');

    return (
        <View> 
             <Text style={styles.label}> Enter Title:</Text>
             <TextInput style={styles.input} value={title} onChangeText={(text) => settitle(text)}/>
             <Text style={styles.label}> Create Contetnt:</Text>
             <TextInput style={styles.input} value={content} onChangeText={(text) => setContent(text)}/>
             <Button 
                title='Save Blog Post' />
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
      

 export default BlogPostForm;
    
