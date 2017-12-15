import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import b64 from 'base-64';
import types from './types';

export const setEmail = (texto) => {
    return {
        type: types.email,
        payload: texto
    }
}
export const setSenha = (texto) => {
    return {
        type: types.password,
        payload: texto
    }
}
export const setNome = (texto) => {
    return {
        type: types.name,
        payload: texto
    }
}
export const cadUser = ({ nome, email, senha }) => {
    return dispatch => {
        dispatch({
            type:types.waiting,
            payload: true
        });
        firebase.auth().createUserWithEmailAndPassword(email, senha)
        .then(user => {
            let id = b64.encode(email);
            firebase.database().ref(`/contatos/${id}`)
                .push({ nome, email })
                .then(value => cadUserSuccess(dispatch));
            
        })
        .catch(error => cadUserFail(error, dispatch));
    }
}
export const authUser = ({ email, senha }) => {
    return dispatch => {
        dispatch({
            type:types.waiting,
            payload: true
        });

        firebase.auth().signInWithEmailAndPassword(email, senha)
        .then(value => signInUserSuccess(dispatch))
        .catch(error => signInUserFail(error, dispatch));
    }
}
const cadUserSuccess = (dispatch) => {
    dispatch ({
        type: types.cad_user_success,
        reset: {
            nome: '',
            senha:'',
            waiting: false
        }
    });
    Actions.inicio();
}
const cadUserFail = (error, dispatch) => {
    dispatch({
        type: types.cad_user_fail,
        payload: error.message,
        reset:{
            waiting: false
        }
    });
}
const signInUserSuccess = (dispatch) => {
    dispatch({
        type: types.sign_in_user_success,
        reset:{
            waiting: false
        }
    });
    Actions.conversas();
}
const signInUserFail = (error, dispatch) => {
    dispatch({
        type: types.sign_in_user_fail,
        payload: error.message,
        reset:{
            waiting: false
        }
    });
}