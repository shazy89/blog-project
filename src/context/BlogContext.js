import createDataContext from './createDataContext';
import jsonServer from "../api/jsonServer";
//any time we have to add some kid a new resource just def reducer def functions retur dispcatch and createContext..
const blogReducer = (state, action) => { 
  switch (action.type) {
    case 'get_blogposts':
      return action.payload;
    case 'remove_blogpost':
      return state.filter(blogPost => blogPost.id !== action.payload)
    case 'edit_blogpost': 
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ?  action.payload : blogPost
      });                     
    default:
      return state;
  }
};


const getBlogPosts = dispatch => {
  return async () => {
   const response = await jsonServer.get('/blogposts');
    dispatch({ type: 'get_blogposts', payload: response.data})
  };
};

const addBlogPost = dispatch => {
  return async (title, content, callback) => {
    await jsonServer.post('/blogposts', { title, content });
    if(callback) callback();
  };
};

  
const editBlogPost = dispatch => {
  return (id, title, content,  callback) => {
     dispatch({type: 'edit_blogpost', payload: {id, title, content }});
     if(callback) callback();
  };
};

const removeBlogPost = dispatch => {
  return async (id) => { 
    await jsonServer.delete(`/blogposts/${id}`)
    dispatch({type: 'remove_blogpost', payload: id})
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, removeBlogPost, editBlogPost, getBlogPosts },
  []
);
     

   




