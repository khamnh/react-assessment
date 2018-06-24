/**
 * Author: Kham Nguyen
 * content: selectors for managing user
 * Date created: 23-June-2018
 * Date modified: 23-June-2018
 * Last modify by: Kham Nguyen
 */
import { createSelector } from 'reselect';

const userManagement = (state) => state.get('userManagement');

export const makeSelectUser = (state) => createSelector(
    userManagement,
    (user) => user.get(state)
);
