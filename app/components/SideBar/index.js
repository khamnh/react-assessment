import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';

class SideBar extends React.Component {
    render() {
        return (
            <div className='side-bar'>
                <div className='kumparan'><h4>Kumparan - Frontend Technical Assessment</h4></div>
                <Nav bsStyle="pills" stacked activeKey={1} >
                    <NavItem eventKey={1} href="/user-management">
                        <i className='fa fa-user user'></i><span>User Management</span>
                    </NavItem>
                </Nav>
            </div>
        );
    }
};

export default SideBar;
