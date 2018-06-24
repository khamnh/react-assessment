/**
 * Author: Kham Nguyen
 * content: containers for details user
 * Date created: 23-June-2018
 * Date modified: 23-June-2018
 * Last modify by: Kham Nguyen
 */

import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { push } from 'react-router-redux';
import injectReducer from 'utils/injectReducer';
import Detail from './Detail';
import reducer from './reducer';
import { makeSelectDetail } from './selectors';
import { getUserById, onSelectTab, getAlbumsByUserId, getPostsByUserId } from './actions';

const mapStateToProps = createStructuredSelector({
    user: makeSelectDetail('user'),
    activeKey: makeSelectDetail('activeKey'),
    albums: makeSelectDetail('albums'),
    posts: makeSelectDetail('posts'),
});

const mapDispatchToProps = (dispatch) => ({
    handleGetUserById: bindActionCreators(getUserById, dispatch),
    handleOnSelectedTab: bindActionCreators(onSelectTab, dispatch),
    handleGetAlbumsByUserId: bindActionCreators(getAlbumsByUserId, dispatch),
    handleGetPostsByUserId: bindActionCreators(getPostsByUserId, dispatch),
    handleBack: (url) => dispatch(push(url)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'userDetail', reducer });

export default compose(withReducer, withConnect)(Detail);
