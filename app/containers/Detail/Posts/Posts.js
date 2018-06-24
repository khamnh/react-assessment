/**
 * Author: Kham Nguyen
 * content: post view
 * Date created: 24-June-2018
 * Date modified: 24-June-2018
 * Last modify by: Kham Nguyen
 */
import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import ViewPost from './ViewPost';
import { makeSelectDetail } from '../selectors';
import { hideShowPost, showEditPost, showDeletePost, showAddPost } from '../actions';
import EditPost from './EditPost';
import DeletePost from './DeletePost';
import AddPost from './AddPost';

class PostItem extends React.Component {
    show = () => {
        this.props.showPost(this.props.post);
    }
    showEdit = () => {
        this.props.showEditPost(true, this.props.post);
    }
    showDelete = () => {
        this.props.showDeletePost(true, this.props.post);
    }
    render() {
        const { post } = this.props;
        return (
            <div className='container-post'>
                <div className='post-item'>
                    <div><a onClick={this.show}><strong>{post.title}</strong></a></div>
                    <div>{post.body}</div>
                </div>
                <div className='control-item'>
                    <a onClick={this.showEdit}><i className='fa fa-pencil' title='Edit this post'></i></a>
                    <a onClick={this.showDelete}><i className='fa fa-trash-o' title='Delete this post'></i></a>
                </div>
            </div>

        );
    }
}

PostItem.propTypes = {
    post: React.PropTypes.object,
    showPost: React.PropTypes.func,
    showEditPost: React.PropTypes.func,
    showDeletePost: React.PropTypes.func,
};

class Posts extends React.Component {
    show = (post) => {
        this.props.showPost(true, post);
    }
    showAdd = () => {
        this.props.showAddPost(true);
    }
    render() {
        const { posts, showEditPost, showDeletePost } = this.props;
        if (_.isEmpty(posts) || posts.size !== undefined) {
            return (
                <div>There is no post to display !</div>
            );
        }
        return (
            <div className='posts-user'>
                <div className='add-post'>
                    <a onClick={this.showAdd}><i className='fa fa-plus'></i><span>Add new post</span></a>
                </div>
                <ViewPost />
                <EditPost />
                <DeletePost />
                <AddPost />
                {posts.map((post, index) => {
                    return <PostItem post={post} key={`${index + 1}`} showPost={this.show} showEditPost={showEditPost} showDeletePost={showDeletePost} />
                })}
            </div>
        );
    }
}

Posts.propTypes = {
    show: React.PropTypes.bool,
    showPost: React.PropTypes.func,
    showEditPost: React.PropTypes.func,
    showDeletePost: React.PropTypes.func,
    showAddPost: React.PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
    show: makeSelectDetail('isShowPost'),
});

const mapDispatchToProps = (dispatch) => ({
    showPost: bindActionCreators(hideShowPost, dispatch),
    showEditPost: bindActionCreators(showEditPost, dispatch),
    showDeletePost: bindActionCreators(showDeletePost, dispatch),
    showAddPost: bindActionCreators(showAddPost, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
