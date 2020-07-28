import {ADD_TO_EDIT_LIST, REMOVE_FROM_EDIT_LIST, EDIT_LIST_ITEM} from '../store/actions/editList';

const addToEditList = (name) => ({type: ADD_TO_EDIT_LIST, payload: {name}});
const removeFromEditList = (index) => ({type: REMOVE_FROM_EDIT_LIST, payload: {index}});
const editListItem = (index, name) => ({type: EDIT_LIST_ITEM, payload: {index, name}});

export { addToEditList, removeFromEditList, editListItem }