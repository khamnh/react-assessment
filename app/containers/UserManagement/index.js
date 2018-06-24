/**
 * Author: Kham Nguyen
 * content: containers for managing user
 * Date created: 23-June-2018
 * Date modified: 23-June-2018
 * Last modify by: Kham Nguyen
 */

import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { push } from 'react-router-redux';
import injectReducer from 'utils/injectReducer';
import UserManagement from './UserManagement';
import reducer from './reducer';
import { getUsers } from './actions';
import { makeSelectUser } from './selectors';

const mapStateToProps = createStructuredSelector({
    users: makeSelectUser('users'),
});

const mapDispatchToProps = (dispatch) => ({
    handleGetUsers: bindActionCreators(getUsers, dispatch),
    handleViewDetail: (url) => dispatch(push(url)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'userManagement', reducer });

export default compose(withReducer, withConnect)(UserManagement);
