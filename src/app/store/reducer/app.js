import {
    DO_REDIRECT,
    SET_COUNCIL,
    EMPTY_STORE
} from '../action/app';

const initialState = {
    council: -1
};


const appReducer = (state = initialState, action) => {
    switch (action.type) {


        case DO_REDIRECT:
            state = Object.assign({}, state, { redirectUrl: action.payload });
            break;

        case SET_COUNCIL:
            state = Object.assign( {}, state, { council: action.payload } );
            break;

        case EMPTY_STORE:
            return initialState;

        case '@@redux-form/DESTROY':
            // debugger;
            return state;

        default:
            break;
    }

    return state;

};

export default appReducer;
