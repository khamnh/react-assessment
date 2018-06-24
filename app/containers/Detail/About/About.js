/**
 * Author: Kham Nguyen
 * content: view for about of user
 * Date created: 24-June-2018
 * Date modified: 24-June-2018
 * Last modify by: Kham Nguyen
 */
import React from 'react';

class About extends React.Component {
    render() {
        const { user } = this.props;
        if (user.size !== undefined) {
            return (
                <div>There is no information to display !</div>
            );
        }
        return (
            <div className='about-user'>
                <ul>
                    <li><i className='fa fa-male'></i><strong>Name:</strong> {user.name}</li>
                    <li><i className='fa fa-user'></i><strong>User name:</strong> {user.username}</li>
                    <li><i className='fa fa-envelope'></i><strong>Email:</strong> {user.email}</li>
                    <li><i className='fa fa-home'></i><strong>Address:</strong> {user.address.suite}, {user.address.street} street, {user.address.city} city</li>
                    <li><i className='fa fa-phone'></i><strong>Phone:</strong> {user.phone}</li>
                    <li><i className='fa fa-link'></i><strong>Website:</strong> <a href={`http://${user.website}`} target='_blank' >{user.website}</a></li>
                    <li><i className='fa fa-building'></i><strong>Company:</strong> {user.company.name}</li>
                </ul>
            </div>
        );
    }
}

About.propTypes = {
    user: React.PropTypes.object,
};

export default About;