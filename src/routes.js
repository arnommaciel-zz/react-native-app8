import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import Login from './components/login';
import Cadastro from './components/cadastro';


export default props => (
    <Router>
        <Stack key="root">
            <Scene key='login' component={Login} title='Login'/>
            <Scene key='cadastro' component={Cadastro} title='Cadastro'/>
        </Stack>
    </Router>
);
