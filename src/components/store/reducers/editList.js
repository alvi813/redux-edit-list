import {ADD_TO_EDIT_LIST, REMOVE_FROM_EDIT_LIST, EDIT_LIST_ITEM} from '../actions/editList';

const initialState = [];

function editList(state = initialState, action) {
    switch(action.type) {
        case ADD_TO_EDIT_LIST:
            return [{name: action.payload.name, id: state.length + 1}, ...state];
        case REMOVE_FROM_EDIT_LIST:
            return [
                ...state.slice(0, action.payload.index),
                ...state.slice(action.payload.index + 1)
            ];
        case EDIT_LIST_ITEM:
            return [
                ...state.slice(0, action.payload.index),
                {...state[action.payload.index], name: action.payload.name},
                ...state.slice(action.payload.index + 1)
            ];
        default:
            return state;
    }
}

export { editList }