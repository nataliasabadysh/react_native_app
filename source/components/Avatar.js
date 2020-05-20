// Core
import React, { useState , useEffect } from 'react';
// styled 
import styled from 'styled-components';
import { logoURL } from '../utils/db';

const Avatar = () => {
    const [avatar, setAvatar] = useState();

    useEffect(() => {
        setAvatar(logoURL);
     }, []);

return <Image source={{uri: avatar }} />
}

const Container = styled.View`
`;
const Content = styled.Text`
   
`;

const Image = styled.Image`
    width: 44px;
    height: 44px;
    background: black;
    border-radius: 22px;
    margin-left: 20px;
    position: absolute;
    top: 0;
    left: 0;
`
export default Avatar;

/*
// Core
import React, { useState } from 'react';
// styled 
import styled from 'styled-components';

const Avatar = () => {

    const [avatar, setAvatar] = useState("https://share.getcloudapp.com/GGukBbDm")
return  <Image source={{ uri: avatar}} />
}

const Image = styled.Image`
    width: 44px;
    height: 44px;
    background: black;
    border-radius: 22px;
    margin-left: 20px;
    position: absolute;
    top: 0;
    left: 0;
`

export default Avatar;
*/