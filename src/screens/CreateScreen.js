import React, {useState, useContext} from 'react';
import { Text, StyleSheet, View, TextInput } from "react-native";


const CreateScreen = ({navigation}) => {
  const [title, settitle] = useState('');
  const [content, setContent] = useState('');
//console.log(title)
   return (
       <View> 
            <Text> Enter Title:</Text>
            <TextInput value={title} onChangeText={(text) => settitle(text)}/>
            <Text> Create Contetnt:</Text>
            <TextInput value={content} onChangeText={(text) => setContent(text)}/>
       </View>
   );
};

      

const styles = StyleSheet.create({

});

export default CreateScreen;