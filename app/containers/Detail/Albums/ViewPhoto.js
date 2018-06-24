/**
 * Author: Kham Nguyen
 * content: view list photo in album
 * Date created: 24-June-2018
 * Date modified: 24-June-2018
 * Last modify by: Kham Nguyen
 */
import React from 'react';
import { Modal, ModalBody, ModalHeader, ModalFooter, Image } from 'react-bootstrap';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';
import { makeSelectDetail } from '../selectors';
import { showHidePhoto, fullSize } from '../actions';

class ThumbnailItem extends React.Component {
    thumbClick = () => {
        this.props.showFullSize(this.props.thumb);
    }
    render() {
        const { thumb } = this.props;
        return (
            <div className='thumbnail-item'>
                <a title={thumb.title} onClick={this.thumbClick}>
                    <Image src={thumb.thumbnailUrl} />
                </a>
            </div>
        );
    }
}

ThumbnailItem.propTypes = {
    thumb: React.PropTypes.object,
    showFullSize: React.PropTypes.func,
};

class ViewPhoto extends React.Component {
    hide = () => {
        this.props.hideModal(false, {});
    }
    renderThumb = () => {
        const { photos, showFullSize } = this.props;
        if (_.isEmpty(photos) || photos.size !== undefined) {
            return <div>No thumbnail</div>;
        }
        return photos.map((thumb, index) => {
            return <ThumbnailItem thumb={thumb} key={`${index + 1}`} showFullSize={showFullSize} />;
        });
    }
    render() {
        const { show, album, photoSelected } = this.props;
        return (
            <div>
                <Modal show={show} bsSize='large'>
                    <ModalHeader><h4>{album.title}</h4></ModalHeader>
                    <ModalBody>
                        <div className='photo-list'>
                            <div className='row'>
                                <div className='col-md-2 col-sm-2'>
                                    <div className='container-thumb'>{this.renderThumb()}</div>
                                </div>
                                <div className='col-md-10 col-sm-10'>
                                    <div className='photo-fullsize'>
                                        <Image src={photoSelected ? photoSelected.url : null} alt='No photo selected' title={photoSelected ? photoSelected.title : undefined} />
                                    </div>
                                </div>
                            </div>
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

ViewPhoto.propTypes = {
    show: React.PropTypes.bool,
    hideModal: React.PropTypes.func,
    album: React.PropTypes.object,
    photos: React.PropTypes.oneOfType([
        React.PropTypes.array,
        React.PropTypes.object,
    ]),
    showFullSize: React.PropTypes.func,
    photoSelected: React.PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
    show: makeSelectDetail('isShowAlbum'),
    album: makeSelectDetail('albumSelected'),
    photos: makeSelectDetail('photos'),
    photoSelected: makeSelectDetail('photoSelected'),
})

const mapDispatchToProps = (dispatch) => ({
    hideModal: bindActionCreators(showHidePhoto, dispatch),
    showFullSize: bindActionCreators(fullSize, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewPhoto);
