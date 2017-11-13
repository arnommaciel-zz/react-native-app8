import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import b64 from 'base-64';

export const setEmail = (texto) => {
    return {
        type: 'email',
        payload: texto
    }
}
export const setSenha = (texto) => {
    return {
        type: 'senha',
        payload: texto
    }
}
export const setNome = (texto) => {
    return {
        type: 'nome',
        payload: texto
    }
}
export const cadUser = ({ nome, email, senha }) => {
    return dispatch => {
        firebase.auth().createUserWithEmailAndPassword(email, senha)
        .then(user => {
            let id = b64.encode(email);
            firebase.database().ref(`/contatos/${id}`)
                .push({ nome, email })
                .then(value => cadUserOk(dispatch));
            
        })
        .catch(error => cadUserFail(error, dispatch));
    }
}
export const authUser = ({ email, senha }) => {
    return dispatch => {
        firebase.auth().signInWithEmailAndPassword(email, senha)
        .then(user => {
            let id = b64.encode(email);
            firebase.database().ref(`/contatos/${id}`)
                .push({ nome, email })
                .then(value => cadUserOk(dispatch));
            
        })
        .catch(error => cadUserFail(error, dispatch));
    }
}
const cadUserOk = (dispatch) => {
    dispatch ({
        type: 'success'
    });
    Actions.inicio();
}
const cadUserFail = (error, dispatch) => {
dispatch({
    type: 'fail',
    payload:error.message
});
}