/**
 * Author: Kham Nguyen
 * content: reducer for details user
 * Date created: 23-June-2018
 * Date modified: 23-June-2018
 * Last modify by: Kham Nguyen
 */
import { fromJS } from 'immutable';
import { types } from './constants';

const initialState = fromJS({
    user: {},
    activeKey: 1,
    albums: [],
    posts: [],
    isShowPost: false,
    postSelected: {},
    comments: [],
    isShowAlbum: false,
    albumSelected: {},
    photos: [],
    photoSelected: {},
    isShowEditPost: false,
    postSelectedToEdit: {},
    isShowDeletePost: false,
    postSelectedToDelete: {},
    isShowAddPost: false,
});

export default function userDetailReducer(state = initialState, action) {
    switch (action.type) {
        case types.GET_DATA_BY_ID_SUCCESS: {
            return state.set('user', action.payload);
        }
        case types.UPDATE_ACTIVE_KEY: {
            return state.set('activeKey', action.payload);
        }
        case types.GET_ALBUMS_BY_USER_ID_SUCCESS: {
            return state.set('albums', action.payload);
        }
        case types.GET_POSTS_BY_USER_ID_SUCCESS: {
            return state.set('posts', action.payload);
        }
        case types.UPDATE_SHOW_POST: {
            return state.set('isShowPost', action.payload);
        }
        case types.POST_SELECTED: {
            return state.set('postSelected', action.payload);
        }
        case types.GET_COMMENTS_BY_POST_SUCCESS: {
            return state.set('comments', action.payload);
        }
        case types.UPDATE_SHOW_ALBUM: {
            return state.set('isShowAlbum', action.payload);
        }
        case types.ALBUM_SELECTED: {
            return state.set('albumSelected', action.payload);
        }
        case types.GET_PHOTOS_BY_ALBUM_ID_SUCCESS: {
            return state.set('photos', action.payload);
        }
        case types.SHOW_FULL_SIZE_IMAGE: {
            return state.set('photoSelected', action.payload);
        }
        case types.SHOW_EDIT_POST: {
            return state.set('isShowEditPost', action.payload);
        }
        case types.POST_SELECTED_TO_EDIT: {
            return state.set('postSelectedToEdit', action.payload);
        }
        case types.SHOW_DELETE_POST: {
            return state.set('isShowDeletePost', action.payload);
        }
        case types.POST_SELECTED_TO_DELETE: {
            return state.set('postSelectedToDelete', action.payload);
        }
        case types.SHOW_ADD_POST: {
            return state.set('isShowAddPost', action.payload);
        }
        default:
            return state;
    }
};
