import React from 'react';
import { Helmet } from 'react-helmet';
import _ from 'lodash';
import Items from './List/Items';

class UserManagement extends React.Component {
    componentWillMount() {
        this.props.handleGetUsers();
    }
    render() {
        const { users, handleViewDetail } = this.props;
        if (_.isEmpty(users) || users.size !== undefined) {
            return (
                <div>
                    <Helmet>
                        <title>User Management Page</title>
                        <meta name='description' content='User Management page of React boilerplate application' />
                    </Helmet>
                    <div>
                        There is no data to display!
                    </div>
                </div>
            );
        }
        return (
            <div className='user-management'>
                <Helmet>
                    <title>User Management Page</title>
                    <meta name='description' content='User Management page of React boilerplate application' />
                </Helmet>
                <div>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6'>
                            { users.map((item, index) => {
                                if (index % 2 === 0) {
                                    return <Items viewDetail={handleViewDetail} item={item} key={`${index + 1}`} />
                                }
                            })}
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6'>
                            { users.map((item, index) => {
                                if (index % 2 !== 0) {
                                    return <Items viewDetail={handleViewDetail} item={item} key={`${index + 1}`} />
                                }
                            })}
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}

UserManagement.propTypes = {
    handleGetUsers: React.PropTypes.func,
    users: React.PropTypes.oneOfType([
        React.PropTypes.array,
        React.PropTypes.object,
    ]),
    handleViewDetail: React.PropTypes.func,
};

export default UserManagement;
