// Core
import React from 'react';
import { StatusBar, Linking } from "react-native";
import WebView from 'react-native-webview'

// Styles 
import styled from 'styled-components';
import { CustomButton } from '../components/Button';

const SectionsScreen = ({ route, navigation }) => {
    const { sections } = route.params;
    return(
        <Container>
            <Cover>
                <StatusBar translucent barStyle='light-content' />
                <Image source={ sections.backgroundUrl } />

                <Wrapper>
                    <Logo source={sections.logo }/>
                    <Subtitle>{sections.caption}</Subtitle>
                </Wrapper>

                <Title>{sections.title }</Title>
                <TextSection>{sections.subtitle }</TextSection>
            </Cover>
            <CustomButton 
                title="X" 
                onPress={()=>navigation.goBack()}
            />

            <Content>
                <WebView 
                    source={{ html: htmlContent + htmlStyles }} 
                    scalesPageToFit={false} 
                    scrollEnabled={false} 
                    ref={ref => (this.webview = ref)}
                    onNavigationStateChange={event => {
                        if(event.url !== "about:blank"){
                            this.webview.stopLoading();
                            Linking.openURL(event.url);
                        }
                    }}
                />
            </Content>
        </Container>
    )
}

const titleWeb = 'check it out';

const htmlContent =`
    <h2>${titleWeb}</h2>
    <p>Author <a href="https://www.facebook.com/nataliasabadysh">facebook</a>
    <img src="https://scontent.fiev25-2.fna.fbcdn.net/v/t1.0-9/89114921_2729156077320806_8594032884153581568_o.jpg?_nc_cat=109&_nc_sid=730e14&_nc_ohc=huhmZki8UE4AX9_6cMb&_nc_ht=scontent.fiev25-2.fna&oh=ce03a68b974a7121fa60930d17611cbd&oe=5EEB25B1" alt="альтернативный текст">
`;

const htmlStyles = `
    <style>
        * {
            font-family: -apple-system, Roboto;
            margin: 0;
            padding: 0;
            font-size: 27px;
            line-height: 22px;
        }
        a{
            color: #4775f2;
            text-decoration: none;
        }
        img{
            width: 100%;
            border-radius: 10px;
            margin-top: 10px;
        }
        h2 {
            font-size: 41px;
            font-weight: 600;
            margin-top: 50px;
            color: #b8bece;
            text-transform: uppercase;
        }
        p {
            margin-top: 50px;
        }

    </style>
`;
const Container = styled.View`
    flex: 1;

`;
const Content = styled.View`
    height: 100%;
    padding: 12px;
    background: white;
`;

const Cover =  styled.View`
    height: 375px;
`;
const Image = styled.Image`
    width: 100%;
    height: 100%;
    position: absolute;
`;

const Title = styled.Text`
    color: white;
    font-size: 27px;
    font-weight: 600;
    width: 220px;
    position: absolute;
    top: 78px;
    left: 20px;
`;

const TextSection = styled.Text`
    color: white;
    font-size: 17px;
    font-weight: 600;
    width: 170px;
    position: absolute;
    bottom: 20px;
    left: 20px;
`;

const Wrapper = styled.View`
    flex-direction: row;
    position: absolute;
    top: 40px;
    left: 20px;
    align-items: center;
`;

const Logo = styled.Image`
    width: 24px;
    height: 24px;
`;

const Subtitle = styled.Text`
    color: rgba(255, 255, 255, 0.8);
    font-size: 15px;
    font-weight: 600;
    text-transform: uppercase;
    margin-left: 5px;
`;

export default SectionsScreen;

