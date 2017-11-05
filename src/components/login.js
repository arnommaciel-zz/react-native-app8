
import React, { Component } from 'react';
import { View, Text, TextInput, TouchableHighlight } from 'react-native';

export default class Login extends Component {
    render() {
        return(
            <View style={styles.container.view}>
                <View style={styles.container.title.view}>
                    <Text style={styles.container.title.text}>WhatsMesseger</Text>
                </View>
                <View style={styles.container.form.view}>
                    <TextInput placeholder="E-mail" style={styles.container.form.input}/>
                    <TextInput placeholder="Senha" style={styles.container.form.input}/>
                    <Text style={styles.container.form.text}>Não tem cadastro? Cadastre-se!</Text>
                </View>
                <View style={styles.container.button.view}>
                    <TouchableHighlight onPress = {() => false} style={styles.container.button.button}>
                        <Text style={styles.container.button.text}>Acessar</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = {
    container: {
        view: {
            flex: 1,
            padding: 10
        },
        title: {
            view: {
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1
            },
            text: {
                fontSize: 25
            }
        },
        form: {
            view: {
                flex: 2
            },
            input: {
                height: 45,
                fontSize: 20
            },
            text: {
                fontSize: 20
            }
        },
        button: {
            view: {
                flex: 2
            },
            button: {
                padding: 10,
                backgroundColor: "#115e54"
            },
            text: {
                textAlign: 'center',
                color: "#fff",
                fontWeight: 'bold',
                fontSize: 18
            }
        }
    }
}