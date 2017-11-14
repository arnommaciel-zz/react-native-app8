
import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';

class Conversas extends Component {

    render(){
        return(
            <View style={container.view}>
                <Image style={{position: 'absolute'}} source={require('../../assets/img/bg.png')}/>
                <View style={container.title.view}>
                    <Text style={container.title.text}>WhatsMesseger</Text>
                </View>
                <View style={container.form.view}>
                    <Text style={container.form.text}>Conversas</Text>
                </View>
            </View>
        );
    }
}

const container = {
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
};

const mapStateToProps = state => {
    return ({
        email: state.AuthReducer.email,
        senha: state.AuthReducer.senha,
        fail: state.AuthReducer.signInUserFail
    });
};

export default connect(mapStateToProps, { })(Conversas);