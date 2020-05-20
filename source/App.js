// Core
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
// Components
import TabNavigation from './navigator/TabNavigatin';

const App = () => (
    <Provider store={store}>
         <TabNavigation />
     </Provider>
);

export default App;
