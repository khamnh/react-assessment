/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import { SSL_OP_PKCS1_CHECK_1 } from 'constants';

export default function NotFound() {
  return (
    <article>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
    </article>
  );
}
