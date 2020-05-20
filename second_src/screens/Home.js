// Core
import React, { useState } from 'react';
import { ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import styled from 'styled-components';

// Component
import Card from '../components/Card';
import Logo from '../components/Logo';
import Course from '../components/Course';
import Menu from '../components/Menu';

// Instruments 
import { dataBar, cards, course } from '../utils/db';
import Avatar from '../components/Avatar';

const Home = ({ navigation }) => {

 return(
        <Container>
        <Menu />
            <SafeAreaView>
                <ScrollView>
                    <TitleBar>
                        <Avatar />
                        <Title> Welcom back, </Title>
                        <Name> Natalia </Name>
                        <Notification> Message </Notification>
                    </TitleBar>

                    <ScrollView style={{ flexDirection: "row", padding: 20, paddingLeft: 12, paddingTop: 30 }} horizontal={true} showsHorizontalScrollIndicator={false}>      
                        {
                            dataBar.map((data, i)=> (
                                <Logo 
                                    logo={data.image} 
                                    text={data.text} 
                                    key={i} 
                                />
                            ))
                        }
                    </ScrollView>

                    <Subtitle> Continue Learning </Subtitle>

                    <ScrollView horizontal={true} style={{ paddingBottom: 30 }} showsHorizontalScrollIndicator={false}>
                        {
                            cards.map((item, i)=> (
                                <TouchableOpacity key={i} onPress={()=> {
                                    // navigation.push('Profile')
                                    navigation.navigate('Profile')
                                }}>
                                    <Card 
                                        key={i} 
                                        title={item.title}
                                        caption={item.caption}
                                        subtitle={item.subtitle}
                                        logo={item.logo}
                                        backgroundUrl={item.backgroundUrl}
                                    />
                                </TouchableOpacity>
                            ))
                        }
                    </ScrollView>
                    <Subtitle>Popular courses</Subtitle>
                    
                    <ScrollView horizontal={true} style={{ paddingBottom: 30 }} showsHorizontalScrollIndicator={false}>

                        {
                            course.map((item, i)=> (
                                <Course 
                                        key={i} 
                                        title={item.title}
                                        autor={item.autor}
                                        caption={item.caption}
                                        subtitle={item.subtitle}
                                        logo={item.logo}
                                        image={item.image}
                                        avatar={item.avatar}
                                    /> 
                            ))
                        }
                    </ScrollView>
                </ScrollView>
            </SafeAreaView>
        </Container>
)}


const Subtitle = styled.Text`
    color: #b8bece;
    font-weight: 600;
    font-size: 15px;
    margin-left: 20px;
    margin-top: 20px;
    text-transform: uppercase;
`

const Container = styled.View`
    background-color: #f0f3f5;
    flex:1;
`;


const Title = styled.Text`
    font-size: 16px;
    color: #b8bece;
    font-weight: 500;
`;

const Notification = styled.Text`
    font-size: 12px;
    padding: 2px;
    color: #4775f2;
    position: absolute;
    right: 20px;
    top: 5px;

`;

const Name = styled.Text`
    font-size: 20px;
    color: #3c4560;
    font-weight: bold;
`;


const TitleBar = styled.View`
    width: 100%;
    margin-top: 50px;
    padding-left: 80px;
`

export default Home;
