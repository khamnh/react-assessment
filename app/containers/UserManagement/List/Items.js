/**
 * Author: Kham Nguyen
 * content: item user
 * Date created: 23-June-2018
 * Date modified: 23-June-2018
 * Last modify by: Kham Nguyen
 */
import React from 'react';
import { Image } from 'react-bootstrap';
import profile from 'images/profile.png';

class Items extends React.Component {
    seeMore = () => {
        const { item, viewDetail } = this.props;
        viewDetail(`/user-detail/${item.id}`);
    }
    render() {
        const { item } = this.props;
        return (
            <div className='user-item'>
                <div className='row'>
                    <div className='col-md-4 col-sm-4 col-xs-12'>
                        <div className='user-avatar'>
                            <Image src={profile} alt='avatar' />
                        </div>
                    </div>
                    <div className='col-md-8 col-sm-8 col-xs-12'>
                        <ul>
                            <li><strong>User name:</strong> {item.username}</li>
                            <li><strong>Name:</strong> {item.name}</li>
                            <li><strong>Phone:</strong> {item.phone}</li>
                        </ul>
                        <div className='see-more'><a onClick={this.seeMore}><i>See more....</i></a></div>
                    </div>
                </div>
            </div>
        );
    }
}

Items.propTypes = {
    item: React.PropTypes.object,
    viewDetail: React.PropTypes.func,
};

export default Items;
