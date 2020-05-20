// Core
import React from 'react';
// styled 
import styled from 'styled-components';

const Card = (props) => {
return (
        <Container> 
            <Cover>
                <Image source={ props.backgroundUrl } />
                <Title>{props.title}</Title>
            </Cover>

            <Content>
                <Logo source={ props.logo }/>
                <Wrapper>
                    <Caption>{props.caption}</Caption>
                    <Subtitle>{props.subtitle}</Subtitle>
                </Wrapper>
            </Content>
        </Container>     
    )
}

const Content = styled.View`
    padding-left: 20px;
    flex-direction: row;
    align-items: center;
    height: 80px;
`;

const Logo = styled.Image`
    width: 40px;
    height: 40px;
`;

const Caption = styled.Text`
    color: #3c4560;
    font-size:20px;
    font-weight: 600;
`;
const Subtitle = styled.Text`
    color: #b8bece;
    font-size:15px;
    font-weight: 600;
    text-transform: uppercase;
`;

const Wrapper = styled.View`
    margin-left: 10px;
`;

const Container = styled.View`
    background: white;
    width: 315px;
    height: 280px;
    border-radius: 14px;
    margin-left: 20px;
    margin-top: 20px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`;

const Cover = styled.View`
    width: 100%;
    height: 300px;
    height: 200px;
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
    overflow: hidden;
`;

const Title = styled.Text`
    color: white;
    z-index: 999;
    font-size: 24px;
    font-weight: bold;
    margin-top: 20px;
    margin-left: 20px;
    width: 170px; 
`;

const Image = styled.Image`
     width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0; 
`;

export default Card;
