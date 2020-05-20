// Core
import React, { useState, useEffect } from 'react';
import { Animated, TouchableOpacity, Dimensions } from 'react-native';

// Styles 
import styled from 'styled-components';
import MenuItem from './MenuItem';
import { menuItems } from '../utils/db';

const screenHeight = Dimensions.get("window").height; // hight of the devise 

const init = new Animated.Value(screenHeight);

const Menu = () => {
    const [topValue, setTop] = useState(init);

    useEffect(()=>{
        Animated.spring(topValue, {
            toValue: 0 // end on animation 
        }).start();
    }, []);

    const toggleMenu = () => {
        Animated.spring(topValue, {
            toValue: screenHeight // end on animation 
        }).start();
    }

 return(
        <AnimatedContainer style={{ top: topValue }}>

            <Cover>
                <Image source={require('../assets/back3.png') } />
                <Title> Meng To </Title>
                <Subtitle> Frontend Developer at TechnoRely </Subtitle>
            </Cover>

            <TouchableOpacity onPress={toggleMenu} style={{ position: "absolute", top: 120, left: "50%", marginLeft: -22, zIndex: 1}}>
                <CloseView>X</CloseView>
            </TouchableOpacity>

            <Content>

            {
                menuItems.map((item, i)=> 
                    <MenuItem 
                        text={item.text} 
                        key={i} 
                        title={item.title}
                        icon={item.icon}
                    />
                )
            }
            </Content>
        </AnimatedContainer>
)}


const Container = styled.View`
    position: absolute;
    background: white;
    width: 100%;
    height: 100%;
    z-index: 100;
`;
const Image = styled.Image`
    position: absolute;
    width: 100%;
    height: 100%;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const CloseView = styled.Text`
    font-size: 40px;
    color: #546bfb;
    min-width: 44px;
    min-height: 48px;
    background: white;
    justify-content: center;
    /* align-items: center; */
    text-align: center;
    /* border-radius: 22px; */
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
`;

const Title = styled.Text`
    color: white;
    font-size: 24px;
    font-weight: 600;
`;
const Subtitle = styled.Text`
    color: rgba(255, 255, 255, 0.5);
    font-size: 14px;
    margin-top: 5px;
    font-weight: 600;
`;


const Cover = styled.View`
    height: 142px;
    background: black;
    justify-content: center;
    align-items: center;
`;
const Content = styled.View`
    height: ${screenHeight};
    /* var */
    background: #f0f3f5;
`;

export default Menu;

/*

// Core
import React, { useState, useEffect } from 'react';
import { Animated, TouchableOpacity, Dimensions } from 'react-native';

// redux 
import { useSelector, useDispatch } from 'react-redux';

// Styles 
import styled from 'styled-components';
import MenuItem from './MenuItem';
import { menuItems } from '../utils/db';

const screenHeight = Dimensions.get("window").height; // hight of the devise 

const init = new Animated.Value(screenHeight);

const closeMenu = {
        type: "CLOSE_MENU"
}

const Menu = () => {
    const [topValue, setTop] = useState(init);

    // const dispatch = useDispatch();
    // const action = useSelector( (state) => state.action)

    // useEffect(()=>{
    //     dispatch(toggleMenu());
    // }, [topValue]);


    // useEffect(()=>{
    //     dispatch(toggleMenu());
    // }, []);

      useEffect(()=>{
        toggleMenu();
    }, []);

    const toggleMenu = () => {
        // if( action === "openMenu" ){
            Animated.spring(topValue, {
                toValue: 0 
            }).start();
        // }
        // if( action === "closenMenu" ){
        //     Animated.spring(topValue, {
        //         toValue: screenHeight 
        //     }).start();
        // }
    }

 return(
        <AnimatedContainer style={{ top: topValue }}>

            <Cover>
                <Image source={require('../assets/back3.png') } />
                <Title> Meng To </Title>
                <Subtitle> Frontend Developer at TechnoRely </Subtitle>
            </Cover>

            <TouchableOpacity onPress={toggleMenu} style={{ position: "absolute", top: 120, left: "50%", marginLeft: -22, zIndex: 1}}>
                <CloseView>X</CloseView>
            </TouchableOpacity>

            <Content>

            {
                menuItems.map((item, i)=> 
                    <MenuItem 
                        text={item.text} 
                        key={i} 
                        title={item.title}
                        icon={item.icon}
                    />
                )
            }
            </Content>
        </AnimatedContainer>
)}


*/