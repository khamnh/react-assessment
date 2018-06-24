import React from 'react';
import { FormattedMessage } from 'react-intl';

import NavBar from './NavBar';


class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className='header-kumparan'>
        {/* <A href="https://twitter.com/mxstbr">
          <Img src={Banner} alt="react-boilerplate - Logo" />
        </A> */}
        <NavBar>
          {/* <HeaderLink to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>
          <HeaderLink to="/features">
            <FormattedMessage {...messages.features} />
          </HeaderLink> */}
        </NavBar>
      </div>
    );
  }
}

export default Header;
