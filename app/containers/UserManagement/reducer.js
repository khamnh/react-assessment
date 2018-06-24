import { fromJS } from 'immutable';
import { types } from './constants';

const initialState = fromJS({
    users: [],
});

export default function userMangementReducer(state = initialState, action) {
    switch (action.type) {
        case types.GET_LIST_USER_SUCCESS: {
            return state.set('users', action.payload);
        }
        default:
            return state;
    }
};
