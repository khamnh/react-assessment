/**
 * Author: Kham Nguyen
 * content: actions for managing user
 * Date created: 23-June-2018
 * Date modified: 23-June-2018
 * Last modify by: Kham Nguyen
 */
import { fetchDataFromServer } from 'commons/commonApi';
import _ from 'lodash';
import { types } from './constants';

export const getUsers = () => (dispatch) => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    return fetchDataFromServer('GET', url, undefined, (json) => {
        const users = _.values(json);
        dispatch({ type: types.GET_LIST_USER_SUCCESS, payload: users });
    }, (error) => {
        console.log(error);
    });
};

export const getPostOfEachUser = (userId) => (dispatch) => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    return fetchDataFromServer('GET', url, undefined, (json) => {
        console.log(json);
    }, (error) => {
        console.log(error);
    })
};
