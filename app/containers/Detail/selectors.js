/**
 * Author: Kham Nguyen
 * content: select for details user
 * Date created: 23-June-2018
 * Date modified: 23-June-2018
 * Last modify by: Kham Nguyen
 */

 import { createSelector } from 'reselect';

 const selectDetails = (state) => state.get('userDetail');

 export const makeSelectDetail = (state) => createSelector(
     selectDetails,
     (detail) => detail.get(state)
 );
 