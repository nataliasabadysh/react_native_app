// Core
import React from 'react';
import Routers from '../navigator/nav';
import AuthProvider from './AuthProvider';

const Providers = () =><AuthProvider> <Routers /></AuthProvider> ;

export default Providers;
