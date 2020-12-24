import createDataContext from './createDataContext';
//any time we have to add some kid a new resource just def reducer def functions retur dispcatch and createContext..
const blogReducer = (state, action) => { 
  switch (action.type) {
    case 'add_blogpost':
      return [...state,
               { id: Math.floor(Math.random() * 99999), 
                 title: action.payload.title,
                 content: action.payload.content 
                } 
              ];
              
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
     
const addBlogPost = dispatch => {
  return (title, content, callback) => {
    dispatch({ type: 'add_blogpost', payload: { title, content } });
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
  return (id) => { 
    dispatch({type: 'remove_blogpost', payload: id})
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, removeBlogPost, editBlogPost },
  [{title: "TEST", content: 'TEST', id:1}]
);

   




