import React, {Component} from 'react';
import {View, Text, TextInput, TouchableHighlight, Image, ActivityIndicator} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { setEmail, setSenha, setNome, cadUser } from '../actions/AuthActions';

class Cadastro extends Component {
    constructor(props) {
        super(props);
    }

    _cadUser() {
        const { nome, email, senha } = this.props
        this.props.cadUser({ nome, email, senha });
    }

    renderBtnCadastrar(){
        if(this.props.waiting){
            return(
                <ActivityIndicator size="large"/>
            );
        }
        return (
            <TouchableHighlight onPress={() => this._cadUser()} style={cadastro.button.touchable}>
                <Text style={cadastro.button.text}>Cadastrar</Text>
            </TouchableHighlight>
        )
    }
    render() {
        return(
            <View style={cadastro.view}>
                <Image style={{position: 'absolute'}} source={require('../../assets/img/bg.png')}/>
                <View style={cadastro.title.view}>
                    <Text style={cadastro.title.text}>WhatsMesseger</Text>
                </View>
                <View style={ cadastro.form.view }>
                    <TextInput placeholder="Nome" placeholderTextColor='#fff' value={this.props.nome} style={cadastro.form.input} onChangeText={texto => this.props.setNome(texto) }/>
                    <TextInput placeholder="E-mail" placeholderTextColor='#fff' value={this.props.email} style={cadastro.form.input} onChangeText={texto => this.props.setEmail(texto) }/>
                    <TextInput placeholder="Senha" placeholderTextColor='#fff' secureTextEntry value={this.props.senha} style={cadastro.form.input} onChangeText={texto => this.props.setSenha(texto) }/>
                    <Text style={{color: 'red', fontSize: 18, backgroundColor: 'transparent'}}>{ this.props.fail }</Text>
                </View>
                <View style={cadastro.button.view}>
                    {this.renderBtnCadastrar()}
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

const mapStateToProps = state => {
    return ({
        nome: state.AuthReducer.nome,
        email: state.AuthReducer.email,
        senha: state.AuthReducer.senha,
        fail: state.AuthReducer.fail,
        waiting: state.AuthReducer.waiting
    });
};

export default connect(mapStateToProps, { setEmail, setSenha, setNome, cadUser })(Cadastro);