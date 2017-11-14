import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import Login from './components/login';
import Cadastro from './components/cadastro';
import Inicio from './components/inicio';
import Conversas from './components/conversas';


export default props => (
    <Router>
        <Stack key="root">
            <Scene key='login' component={Login} title='Login'/>
            <Scene key='cadastro' component={Cadastro} title='Cadastro'/>
            <Scene key='inicio' component={Inicio} title='Bem-vindo!'/>
            <Scene key='conversas' component={Conversas} title='Conversas'/>
        </Stack>
    </Router>
);
