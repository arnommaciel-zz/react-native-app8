import React, {Component} from 'react';
import {View, Text, TextInput, TouchableHighlight} from 'react-native';

export default class Cadastro extends Component {
    render() {
        return(
            <View style={cadastro.view}>
                <View style={cadastro.form.view}>
                    <TextInput placeholder="Nome" style={cadastro.form.input}/>
                    <TextInput placeholder="E-mail" style={cadastro.form.input}/>
                    <TextInput placeholder="Senha" style={cadastro.form.input}/>
                </View>
                <View style={cadastro.button.view}>
                    <TouchableHighlight onPress={() => false} style={cadastro.button.touchable}>
                        <Text style={cadastro.button.text}>Cadastrar</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}
const cadastro = {
    view: {
        flex: 1,
        padding: 10
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