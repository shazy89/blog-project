import createDataContext from './createDataContext';
//any time we have to add some kid a new resource just def reducer def functions retur dispcatch and createContext..
const blogReducer = (state, action) => { 
  switch (action.type) {
    case 'add_blogpost':
      return [...state,
               { id: Math.floor(Math.random() * 99999), 
                             title: `Blog Post #${state.length + 1}` } ];
    case 'remove_blogpost':
      return state.filter(blogPost => blogPost.id !== action.payload)                   
    default:
      return state;
  }
};
     
const addBlogPost = dispatch => {
  return () => {
    dispatch({ type: 'add_blogpost' });
  };
};

const removeBlogPost = dispatch => {
  return (id) => { 
    dispatch({type: 'remove_blogpost', payload: id})
  }
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, removeBlogPost },
  []
);

   




