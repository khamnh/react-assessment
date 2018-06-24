/**
 * Author: Kham Nguyen
 * content: modal view edit post
 * Date created: 24-June-2018
 * Date modified: 24-June-2018
 * Last modify by: Kham Nguyen
 */
import React from 'react';
import { Modal, ModalBody, ModalHeader } from 'react-bootstrap';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showEditPost, updatePost } from '../actions';
import { makeSelectDetail } from '../selectors';

class EditPost extends React.Component {
    hide = () => {
        this.props.hideModal(false, {});
    }
    confirm = () => {
        this.props.handleUpdatePost(this.props.post);
        this.hide();
    }
    render() {
        const { show, post } = this.props;
        return (
            <Modal show={show} bsSize='large'>
                <ModalHeader><h4>Edit Post</h4></ModalHeader>
                <ModalBody>
                    <div className='modal-edit-post'>
                        <div className='title-post'>
                            <label htmlFor='title'>Title</label>
                            <input type='text' id='title-post' maxLength={255} defaultValue={post.title} />
                        </div>
                        <div className='body-post'>
                            <label htmlFor='content-post'>Content</label>
                            <textarea maxLength={500} id='content-post' defaultValue={post.body} />
                        </div>
                        <div className='group-button-action'>
                            <button className='btn btn-primary confirm' onClick={this.confirm}>Confirm</button>
                            <button className='btn btn-default' onClick={this.hide}>Cancel</button>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        );
    }
}

EditPost.propTypes = {
    show: React.PropTypes.bool,
    hideModal: React.PropTypes.func,
    post: React.PropTypes.object,
    handleUpdatePost: React.PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
    show: makeSelectDetail('isShowEditPost'),
    post: makeSelectDetail('postSelectedToEdit'),
});

const mapDispatchToProps = (dispatch) => ({
    hideModal: bindActionCreators(showEditPost, dispatch),
    handleUpdatePost: bindActionCreators(updatePost, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);
