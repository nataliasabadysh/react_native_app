// Core
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
// Components
import RouterApp from './navigator/TabNavigatin';

const App = () => (
    <Provider store={store}>
         <RouterApp />
     </Provider>
);

export default App;
