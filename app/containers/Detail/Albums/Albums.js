/**
 * Author: Kham Nguyen
 * content: view for albums of user
 * Date created: 23-June-2018
 * Date modified: 24-June-2018
 * Last modify by: Kham Nguyen
 */
import React from 'react';
import { Image } from 'react-bootstrap';
import noimage from 'images/noimage.png';
import _ from 'lodash';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { showHidePhoto } from '../actions';
import ViewPhoto from './ViewPhoto';

class ItemAlbums extends React.Component {
    show = () => {
        this.props.showPhoto(true, this.props.albums);
    }
    render() {
        const { albums } = this.props;
        return (
            <div className='item-albums'>
                <div className='image-title'>
                    <a title={albums.title} onClick={this.show}><Image src={noimage} alt='Image albums' /></a>
                </div>
                <div className='count-albums'>{albums.title}</div>
            </div>
        );
    }
}

ItemAlbums.propTypes = {
    albums: React.PropTypes.object,
    showPhoto: React.PropTypes.func,
};


class Albums extends React.Component {
    render() {
        const { albums, handleShowPhoto } = this.props;
        if (_.isEmpty(albums) || albums.size !== undefined) {
            return (
                <div>There is no album to display !</div>
            );
        }
        return (
            <div className='user-albums'>
                <ViewPhoto />
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
                        {albums.map((al, index) => {
                            if (index % 2 === 0) {
                                return <ItemAlbums albums={al} key={`${index + 1}`} showPhoto={handleShowPhoto} />
                            }
                        })}
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
                        {albums.map((al, index) => {
                            if (index % 2 !== 0) {
                                return <ItemAlbums albums={al} key={`${index + 1}`} showPhoto={handleShowPhoto} />
                            }
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

Albums.propTypes = {
    albums: React.PropTypes.array,
    handleShowPhoto: React.PropTypes.func,
};

const mapStateToProps = createStructuredSelector({

});

const mapDispatchToProps = (dispatch) => ({
    handleShowPhoto: bindActionCreators(showHidePhoto, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Albums);
