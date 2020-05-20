// Core
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
// Components
import Routers from './navigator/nav';

const App = () => (
    <Provider store={store}>
         <Routers />
     </Provider>
);

export default App;
