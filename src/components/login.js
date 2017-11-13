
import React, { Component } from 'react';
import { View, Text, TextInput, TouchableHighlight, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { setEmail, setSenha, authUser } from '../actions/AuthActions';

class Login extends Component {

    _authUser() {
        const { email, senha } = this.props
        this.props.authUser({ email, senha });
    }

    render(){
        return(
            <View style={styles.container.view}>
                <Image style={{position: 'absolute'}} source={require('../../assets/img/bg.png')}/>
                <View style={styles.container.title.view}>
                    <Text style={styles.container.title.text}>WhatsMesseger</Text>
                </View>
                <View style={styles.container.form.view}>
                    <TextInput value={this.props.email} placeholderTextColor='#fff' placeholder="E-mail" onChangeText={texto => this.props.setEmail(texto) } style={styles.container.form.input}/>
                    <TextInput  value={this.props.senha} placeholderTextColor='#fff' secureTextEntry placeholder="Senha" style={styles.container.form.input} onChangeText={texto => this.props.setSenha(texto) } style={styles.container.form.input}/>
                    <TouchableHighlight onPress = {() => Actions.cadastro() }>
                        <Text style={styles.container.form.text}>Não tem cadastro? Cadastre-se!</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.container.button.view}>
                    <TouchableHighlight onPress = {() => this._authUser()} style={styles.container.button.touchable}>
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
                flex: 1,
                backgroundColor: 'transparent'
            },
            text: {
                fontSize: 25,
                color: '#fff',
                fontWeight: 'bold'
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
                fontSize: 20,
                color: '#fff'
            }
        },
        button: {
            view: {
                flex: 2
            },
            touchable: {
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
};

const mapStateToProps = state => {
    return ({
        email: state.AuthReducer.email,
        senha: state.AuthReducer.senha
    });
};

export default connect(mapStateToProps, { setEmail, setSenha, authUser })(Login);