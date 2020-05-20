// Core 
import React,{ useState, } from 'react';
import { ActivityIndicator} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// Styles 
import styled from 'styled-components';
import AppTabs from '../components/AppTabs';
import AuthStack from './AuthStack';
import HomeStack from './HomeStack';


function Routers() {
    const [loading, setLoading] = useState(false);

    if(loading){
        return <Container><ActivityIndicator size="large"/></Container>
    }
    return (
      <NavigationContainer>
        { false ? 
                <AppTabs />
            : 
              //  <AuthStack/>
               <HomeStack/>
        }
      </NavigationContainer>
    );
  }

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default Routers;
