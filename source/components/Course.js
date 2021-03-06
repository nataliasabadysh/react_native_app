// Core
import React from 'react';
// styled 
import styled from 'styled-components';

const Course = (props) => {
return (
        <Container> 
            <Cover>
                <Image source={ props.image } />
                <Logo  source={ props.logo } resizeMode="contain" />
                <Subtitle>{props.subtitle}</Subtitle>
                <Title>{props.title}</Title>
            </Cover>

            <Content>
                <Avatar source={ props.avatar } />
                <Caption>{props.caption}</Caption>
                <Autor>Taugth by {props.autor}</Autor>
            </Content>
        </Container>     
    )
}

const Container = styled.View`
    width: 315px;
    height: 335px;
    background: white;
    margin: 10px 20px;
    border-radius: 14px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
`;


const Cover = styled.View`
    height: 260px;
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
    overflow: hidden;
    justify-content: flex-end;

`;

const Image = styled.Image`
    width: 100%;
    height: 100%;
    position: absolute;
`;


const Logo = styled.Image`
    width: 48px;
    height: 48px;
    position: absolute;
    top: 90px;
    left: 50%;
    margin-left: -24px;
`;

const Avatar = styled.Image`
    width: 32px;
    height: 32px;
    position: absolute;
    top: 20px;
    /* left: 20px; */
    left: -40px;
    border-radius: 16px;
`;


const Caption = styled.Text`
    color: #3c4560;
    font-size: 14px;
    font-weight: 500;
`;


const Subtitle = styled.Text`
    color: rgba(255, 255, 255, 0.8);
    font-size: 15px;
    font-weight: 500;
    text-transform: uppercase;
    margin-left: 20px; 
`;

const Content = styled.View`
    margin-left: 62px;
    justify-content: center;
    height: 75px;
`;

const Title = styled.Text`
    color: white;
    font-size: 24px;
    font-weight: 600;
    margin-top: 4px; 
    margin-bottom: 20px;
    margin-left: 20px; 
    width: 170px;
`;

const Autor = styled.Text`
    color: #b8bece;
    font-size: 13px;
    font-weight: 500;
    margin-top: 4px;
`;

export default Course;
