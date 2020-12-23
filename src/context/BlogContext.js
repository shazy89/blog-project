import React from 'react';

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
    const blogPosts = [{title: 'Blog post $1'},{title: 'Blog post #2'}]
    
    return (
      <BlogContext.Provider value={blogPosts}>{children}</BlogContext.Provider>
    );
  };
  
  export default BlogContext;
        
  
