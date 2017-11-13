import React from 'react';
import { View, Text, Button, Image, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default props => (
    <View style={inicio.view}>
        <Image style={{position: 'absolute'}} source={require('../../assets/img/bg.png')}/>
        <View style={inicio.title.view}>
            <Text style={inicio.title.text}>WhatsMesseger</Text>
            <Image source={require('../../assets/img/logo.png')}/>
        </View>
        <View style={inicio.button.view}>
            <TouchableHighlight onPress={ () => Actions.login() } style={inicio.button.touchable}>
                <Text style={inicio.button.text}>Fazer Login</Text>
            </TouchableHighlight>
        </View>
    </View>
);

const inicio = {
    view: {
        flex: 1,
        padding: 10
    },
    title: {
        view: {
            justifyContent: 'center',
            alignItems: 'center',
            flex: 2,
            backgroundColor: 'transparent'
        },
        text: {
            fontSize: 25,
            color: '#fff',
            marginBottom:30,
            fontWeight: 'bold'
        }
    },
    form: {
        view: {
            flex: 4,
            justifyContent: 'center'
        },
        input: {
            fontSize: 20,
            height: 45
        }
    },
    button: {
        view: {
            flex: 1
        },
        text: {
            textAlign: 'center',
            color: "#fff",
            fontWeight: 'bold',
            fontSize: 18
        },
        touchable: {
            padding: 10,
            backgroundColor: "#115e54"
        }
    }    
};