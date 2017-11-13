const INITIAL_STATE = {
    nome: '',
    email: '',
    senha: '',
    fail: ''
};

export default (state = INITIAL_STATE, action) => {
    
    if(action.type === 'success'){
        return { ...state, nome: '', senha: '' }    
    }
    state[action.type] = action.payload;
    return { ...state }
    
}