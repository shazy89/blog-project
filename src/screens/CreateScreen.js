import React, { useContext } from 'react';
import {  StyleSheet } from "react-native";
import { Context } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'
const CreateScreen = ({navigation}) => {

    const { addBlogPost } = useContext(Context)

return <BlogPostForm />
   
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
      

