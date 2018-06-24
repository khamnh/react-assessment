/**
 * Author: Kham Nguyen
 * content: Modal view detail post
 * Date created: 24-June-2018
 * Date modified: 24-June-2018
 * Last modify by: Kham Nguyen
 */
import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'react-bootstrap';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import _ from 'lodash';
import { makeSelectDetail } from '../selectors';
import { bindActionCreators } from 'redux';
import { hideShowPost, getCommentByPostId, updateCommentByPost, deleteCommentByPost, addCommentByPost } from '../actions';

class ItemCommnet extends React.Component {
    constructor() {
        super();
        this.state = {
            show: false,
            showConfirm: false,
        };
        this.toggle = this.toggle.bind(this);
        this.toggleConfirm = this.toggleConfirm.bind(this);
    }

    toggle = () => {
        this.setState({ show: !this.state.show });
    }
    confirm = () => {
        this.props.hanldeChangeComment(this.props.item);
        this.toggle();
    }

    toggleConfirm = () => {
        this.setState({ showConfirm: !this.state.showConfirm });
    }
    confirmDelete = () => {
        this.props.hanldeDeleteComment(this.props.item);
        this.toggleConfirm();
    }
    render() {
        const { item } = this.props;
        return (
            <div>
                <div className='comment-item'>
                    <div><strong>{item.email}</strong>: </div>
                    <div>{item.body}</div>
                </div>
                <div className='control-item'>
                    <a onClick={this.toggle}><i className='fa fa-pencil' title='Edit this comment'></i></a>
                    <a onClick={this.toggleConfirm}><i className='fa fa-trash-o' title='Delete this comment'></i></a>
                </div>
                <Modal show={this.state.show} bsSize='lg'>
                    <ModalBody>
                        <div className='edit-body'><textarea id='textarea' defaultValue={item.body} /></div>
                        <div className='button-group'>
                            <a onClick={this.confirm}><i className='fa fa-check confirm'></i></a>
                            <a onClick={this.toggle}><i className='fa fa-times cancel' ></i></a>
                        </div>
                    </ModalBody>
                </Modal>
                <Modal show={this.state.showConfirm} bsSize='sm'>
                    <ModalBody>
                        <div className='edit-body'>Are you sure you want to delete this comment?</div>
                        <div className='button-group'>
                            <a onClick={this.confirmDelete}><i className='fa fa-check confirm'></i></a>
                            <a onClick={this.toggleConfirm}><i className='fa fa-times cancel' ></i></a>
                        </div>
                    </ModalBody>
                </Modal>
            </div>

        );
    }
}

ItemCommnet.propTypes = {
    item: React.PropTypes.object,
    hanldeChangeComment: React.PropTypes.func,
    hanldeDeleteComment: React.PropTypes.func,
};

class ViewPost extends React.Component {
    constructor() {
        super();
        this.state = {
            showAdd: false,
        };
    }
    toggle = () => {
        this.setState({ showAdd: !this.state.showAdd });
    }
    hide = () => {
        this.props.hidieModal(false, {});
    }
    renderComments = () => {
        const { comments, hanldeChangeComment, hanldeDeleteComment } = this.props;
        if (_.isEmpty(comments) || comments.size !== undefined) {
            return <div><i>There is no comment to display !</i></div>;
        }

        return comments.map((item, index) => {
            return <ItemCommnet item={item} key={`${index + 1}`} hanldeChangeComment={hanldeChangeComment} hanldeDeleteComment={hanldeDeleteComment} />;
        })
    }
    comfirmAdd = () => {
        this.props.handleAddComment(this.props.post);
        this.toggle();
    }
    render() {
        const { show, post } = this.props;
        return (
            <div>
                <Modal show={show} bsSize='large'>
                    <ModalBody>
                        <div className='post-detail'>
                            <div><strong>{post.title}</strong></div>
                            <div>{post.body}</div>
                        </div>
                        <div className='add-comment'>
                            <a onClick={this.toggle}><i className='fa fa-plus' title='Add more comment'></i></a>
                            <Modal show={this.state.showAdd} bsSize='lg'>
                                <ModalBody>
                                    <textarea maxLength={500} id='body-comment' />
                                    <div className='button-group'>
                                        <a onClick={this.comfirmAdd}><i className='fa fa-check confirm'></i></a>
                                        <a onClick={this.toggle}><i className='fa fa-times cancel' ></i></a>
                                    </div>
                                </ModalBody>
                            </Modal>
                        </div>
                        <div className='post-comments'>
                            {this.renderComments()}
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <button className='btn btn-primary' onClick={this.hide}>Close</button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

ViewPost.propTypes = {
    show: React.PropTypes.bool,
    hidieModal: React.PropTypes.func,
    post: React.PropTypes.object,
    handleGetCommentByPostId: React.PropTypes.func,
    comments: React.PropTypes.oneOfType([
        React.PropTypes.array,
        React.PropTypes.object,
    ]),
    hanldeChangeComment: React.PropTypes.func,
    hanldeDeleteComment: React.PropTypes.func,
    handleAddComment: React.PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
    show: makeSelectDetail('isShowPost'),
    post: makeSelectDetail('postSelected'),
    comments: makeSelectDetail('comments'),
});

const mapDispatchToProps = (dispatch) => ({
    hidieModal: bindActionCreators(hideShowPost, dispatch),
    handleGetCommentByPostId: bindActionCreators(getCommentByPostId, dispatch),
    hanldeChangeComment: bindActionCreators(updateCommentByPost, dispatch),
    hanldeDeleteComment: bindActionCreators(deleteCommentByPost, dispatch),
    handleAddComment: bindActionCreators(addCommentByPost, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewPost);