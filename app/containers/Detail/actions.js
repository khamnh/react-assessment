/**
 * Author: Kham Nguyen
 * content: actions for details user
 * Date created: 23-June-2018
 * Date modified: 24-June-2018
 * Last modify by: Kham Nguyen
 */

import { fetchDataFromServer } from 'commons/commonApi';
import _ from 'lodash';
import { types } from './constants';

export const getUserById = (id) => (dispatch) => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    return fetchDataFromServer('GET', url, undefined, (json) => {
        const users = _.values(json);
        const user = users.find((item) => item.id == id);
        dispatch({ type: types.GET_DATA_BY_ID_SUCCESS, payload: user });
    }, (error) => {
        console.log(error);
    })
};

export const onSelectTab = (key) => (dispatch) => {
    dispatch({ type: types.UPDATE_ACTIVE_KEY, payload: key });
};

export const getAlbumsByUserId = (id) => (dispatch) => {
    const url = `https://jsonplaceholder.typicode.com/users/${id}/albums`;
    return fetchDataFromServer('GET', url, undefined, (json) => {
        dispatch({ type: types.GET_ALBUMS_BY_USER_ID_SUCCESS, payload: json });
    }, (error) => {
        console.log(error);
    });
};

export const getPostsByUserId = (id) => (dispatch) => {
    const url = `https://jsonplaceholder.typicode.com/users/${id}/posts`;
    return fetchDataFromServer('GET', url, undefined, (json) => {
        dispatch({ type: types.GET_POSTS_BY_USER_ID_SUCCESS, payload: json });
    }, (error) => {
        console.log(error);
    });
}

export const hideShowPost = (show, post) => (dispatch) => {
    dispatch({ type: types.UPDATE_SHOW_POST, payload: show });
    dispatch({ type: types.POST_SELECTED, payload: post });
    if (post && post.id) {
        dispatch(getCommentByPostId(post.id));
    }
}

export const getCommentByPostId = (id) => (dispatch) => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}/comments`;
    return fetchDataFromServer('GET', url, undefined, (json) => {
        dispatch({ type: types.GET_COMMENTS_BY_POST_SUCCESS, payload: json });
    }, (error) => {
        console.log(error);
    });
};

export const getPhotosByAlbumId = (id) => (dispatch) => {
    const url = `https://jsonplaceholder.typicode.com/albums/${id}/photos`;
    return fetchDataFromServer('GET', url, undefined, (json) => {
        dispatch({ type: types.GET_PHOTOS_BY_ALBUM_ID_SUCCESS, payload: json });
    }, (error) => {
        console.log(error);
    });
};

export const showHidePhoto = (isShowPhoto, album) => (dispatch) => {
    dispatch({ type: types.UPDATE_SHOW_ALBUM, payload: isShowPhoto });
    dispatch({ type: types.ALBUM_SELECTED, payload: album });
    if (album && album.id) {
        dispatch(getPhotosByAlbumId(album.id));
    }
};

export const fullSize = (photo) => (dispatch) => {
    dispatch({ type: types.SHOW_FULL_SIZE_IMAGE, payload: photo });
};

export const updateCommentByPost = (comment) => (dispatch) => {
    const textArea = document.getElementById('textarea').value;
    const url = `https://jsonplaceholder.typicode.com/comments/${comment.id}`;
    const entry = {
        id: comment.id,
        postId: comment.postId,
        name: comment.name,
        email: comment.email,
        body: textArea,
    };
    return fetchDataFromServer('PUT', url, entry, (json) => {
        console.log(json);
    }, (error) => {
        console.log(error);
    });
};

export const deleteCommentByPost = (comment) => (dispatch) => {
    const url = `https://jsonplaceholder.typicode.com/comments/${comment.id}`;
    return fetchDataFromServer('DELETE', url, undefined, (json) => {
        console.log(json);
    }, (error) => {
        console.log(error);
    });
};

export const addCommentByPost = (post) => (dispatch) => {
    const url = 'https://jsonplaceholder.typicode.com/comments';
    const entry = {
        postId: post.id,
        body: document.getElementById('body-comment').value,
    };
    return fetchDataFromServer('POST', url, entry, (json) => {
        console.log(json);
    }, (error) => {
        console.log(error);
    });
};

export const showEditPost = (isShow, post) => (dispatch) => {
    dispatch({ type: types.SHOW_EDIT_POST, payload: isShow });
    dispatch({ type: types.POST_SELECTED_TO_EDIT, payload: post });
};

export const updatePost = (post) => (dispatch) => {
    const url = `https://jsonplaceholder.typicode.com/posts/${post.id}`;
    const entry = {
        id: post.id,
        title: document.getElementById('title-post').value,
        body: document.getElementById('content-post').value,
        userId: post.userId,
    };
    return fetchDataFromServer('PUT', url, entry, (json) => {
        console.log(json);
    }, (error) => {
        console.log(error);
    });
};

export const deletePost = (post) => (dispatch) => {
    const url = `https://jsonplaceholder.typicode.com/posts/${post.id}`;
    return fetchDataFromServer('DELETE', url, undefined, (json) => {
        console.log(json);
    }, (error) => {
        console.log(error);
    });
};

export const showDeletePost = (isShow, post) => (dispatch) => {
    dispatch({ type: types.SHOW_DELETE_POST, payload: isShow });
    dispatch({ type: types.POST_SELECTED_TO_DELETE, payload: post });
};

export const showAddPost = (isShow) => (dispatch) => {
    dispatch({ type: types.SHOW_ADD_POST, payload: isShow });
};

export const addPost = () => (dispatch) => {
    const url = `https://jsonplaceholder.typicode.com/posts`;
    const entry = {
        title: document.getElementById('title-add-post').value,
        body: document.getElementById('content-add-post').value,
    };
    return fetchDataFromServer('POST', url, entry, (json) => {
        console.log(json);
    }, (error) => {
        console.log(error);
    });
};