import React, { useState, useContext } from 'react';
import { Text, StyleSheet, View, TextInput} from "react-native";
import BlogPostForm from '../components/BlogPostForm'
import { Context } from '../context/BlogContext'

const EditScreen = ({navigation}) => {
    const { state } = useContext(Context) ;
    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'));

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

export default EditScreen;
      
