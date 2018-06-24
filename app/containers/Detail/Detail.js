/**
 * Author: Kham Nguyen
 * content: view for details user
 * Date created: 23-June-2018
 * Date modified: 23-June-2018
 * Last modify by: Kham Nguyen
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { Image, Nav, NavItem } from 'react-bootstrap';
import avatar from 'images/img_avatar.png';
import About from './About/About';
import Albums from './Albums/Albums';
import Posts from './Posts/Posts';

class Detail extends React.Component {
    componentWillMount() {
        const id = this.props.match.params.id;
        this.props.handleGetUserById(id);
        this.props.handleGetAlbumsByUserId(id);
        this.props.handleGetPostsByUserId(id);
    }
    handleSelect = (eventKey) => {
        this.props.handleOnSelectedTab(eventKey);
    }
    renderView = () => {
        if (this.props.activeKey == 1) {
            return <About user={this.props.user} />;
        } else if (this.props.activeKey == 2) {
            return <Albums albums={this.props.albums} />
        } else {
            return <Posts posts={this.props.posts} />
        }
    }
    back = () => {
        this.props.handleBack('/user-management')
    }
    render() {
        const { user, activeKey } = this.props;
        return (
            <div>
                <Helmet>
                    <title>User Detail Page</title>
                    <meta name='description' content='User Management page of React boilerplate application' />
                </Helmet>
                <div className='content-detail'>
                    <div className='back-to-user'>
                        <a onClick={this.back}><i className='fa fa-arrow-left'></i><span>Back</span></a>
                    </div>
                    <div className='row'>
                        <div className='col-lg-3 col-md-3 col-sm-3'>
                            <div className='detail-avatar'>
                                <Image src={avatar} alt='avatar' />
                            </div>
                        </div>
                        <div className='col-lg-9 col-md-9 col-sm-9'>

                        </div>
                    </div>
                    <div className='content-nav'>
                        <Nav bsStyle='tabs' activeKey={activeKey} onSelect={this.handleSelect}>
                            <NavItem eventKey={1} defaultChecked >
                                About
                            </NavItem>
                            <NavItem eventKey={2}>
                                Albums
                            </NavItem>
                            <NavItem eventKey={3}>
                                Posts
                            </NavItem>
                        </Nav>
                        <div>
                            {this.renderView()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

Detail.propTypes = {
    handleGetUserById: React.PropTypes.func,
    user: React.PropTypes.object,
    handleOnSelectedTab: React.PropTypes.func,
    activeKey: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number,
    ]),
    handleGetAlbumsByUserId: React.PropTypes.func,
    albums: React.PropTypes.oneOfType([
        React.PropTypes.object,
        React.PropTypes.array,
    ]),
    handleGetPostsByUserId: React.PropTypes.func,
    posts: React.PropTypes.oneOfType([
        React.PropTypes.object,
        React.PropTypes.array,
    ]),
    handleBack: React.PropTypes.func,
};

export default Detail;
