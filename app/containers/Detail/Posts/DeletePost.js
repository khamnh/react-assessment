/**
 * Author: Kham Nguyen
 * content: modal view delete post
 * Date created: 24-June-2018
 * Date modified: 24-June-2018
 * Last modify by: Kham Nguyen
 */
import React from 'react';
import { Modal, ModalBody, ModalHeader } from 'react-bootstrap';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showEditPost, deletePost, showDeletePost } from '../actions';
import { makeSelectDetail } from '../selectors';

class DeletePost extends React.Component {
    hide = () => {
        this.props.hideModal(false, {});
    }
    confirm = () => {
        this.props.handleDeletePost(this.props.post);
        this.hide();
    }
    render() {
        const { show, post } = this.props;
        return (
            <Modal show={show} bsSize='large'>
                <ModalHeader><h4>Delete Post</h4></ModalHeader>
                <ModalBody>
                    <div className='modal-delete-post'>
                        <div className='question'>Are you sure you want to delete this post ?</div>
                        <div className='group-button-delete'>
                            <button className='btn btn-primary confirm' onClick={this.confirm}>Yes</button>
                            <button className='btn btn-default' onClick={this.hide}>No</button>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        );
    }
}

DeletePost.propTypes = {
    show: React.PropTypes.bool,
    hideModal: React.PropTypes.func,
    handleDeletePost: React.PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
    show: makeSelectDetail('isShowDeletePost'),
    post: makeSelectDetail('postSelectedToDelete'),
});

const mapDispatchToProps = (dispatch) => ({
    hideModal: bindActionCreators(showDeletePost, dispatch),
    handleDeletePost: bindActionCreators(deletePost, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeletePost);

