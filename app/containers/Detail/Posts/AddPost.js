/**
 * Author: Kham Nguyen
 * content: modal view add post
 * Date created: 24-June-2018
 * Date modified: 24-June-2018
 * Last modify by: Kham Nguyen
 */
import React from 'react';
import { Modal, ModalBody, ModalHeader } from 'react-bootstrap';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showAddPost, addPost } from '../actions';
import { makeSelectDetail } from '../selectors';

class AddPost extends React.Component {
    hide = () => {
        this.props.hideModal(false);
    }
    confirm = () => {
        this.props.handleAddPost();
        this.hide();
    }
    render() {
        const { show, post } = this.props;
        return (
            <Modal show={show} bsSize='large'>
                <ModalHeader><h4>Add Post</h4></ModalHeader>
                <ModalBody>
                    <div className='modal-edit-post'>
                        <div className='title-post'>
                            <label htmlFor='title'>Title</label>
                            <input type='text' id='title-add-post' maxLength={255} />
                        </div>
                        <div className='body-post'>
                            <label htmlFor='content-post'>Content</label>
                            <textarea maxLength={500} id='content-add-post' />
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

AddPost.propTypes = {
    show: React.PropTypes.bool,
    hideModal: React.PropTypes.func,
    post: React.PropTypes.object,
    handleAddPost: React.PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
    show: makeSelectDetail('isShowAddPost'),
});

const mapDispatchToProps = (dispatch) => ({
    hideModal: bindActionCreators(showAddPost, dispatch),
    handleAddPost: bindActionCreators(addPost, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);
