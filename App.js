import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';
import { Provider } from './src/context/BlogContext'
//import { Provider as BlogComments } from './src/context/BlogComments' for another provider
import ShowScreen from './src/screens/ShowScreen'
import CreateScreen from './src/screens/CreateScreen'
import EditScreen from './src/screens/EditScreen'

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    Show: ShowScreen,
    Create: CreateScreen,
    Edit: EditScreen, 
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Blogs',
    },
  }
);
const App = createAppContainer(navigator)

export default () => {
  return <Provider>
           <App />
         </Provider>  
};

//const App = createAppContainer(navigator)
// to add another provider
// export default () => {
//   return <Provider>
//            <CommentsProvider>
//             <App />
//           </CommentsProvider>
//          </Provider>  
// };