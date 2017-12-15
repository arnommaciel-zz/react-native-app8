import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import Login from './components/login';
import Cadastro from './components/cadastro';
import Inicio from './components/inicio';
import Conversas from './components/conversas';


export default props => (
    <Router>
        <Stack key="root" navigationBarStyle={{backgroundColor: '#115e54'}} titleStyle={{color:'#fff'}}>
            <Scene key='login' component={Login} title='Login' hideNavBar={ true }/>
            <Scene key='cadastro' component={Cadastro} title='Cadastro' hideNavBar={ false }/>
            <Scene key='inicio' component={Inicio} title='Bem-vindo!' hideNavBar={ true }/>
            <Scene key='conversas' component={Conversas} title='Conversas' hideNavBar={ true }/>
        </Stack>
    </Router>
);
