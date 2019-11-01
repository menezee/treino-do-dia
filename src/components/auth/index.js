import React, { useContext, Fragment } from 'react';
import { AuthContext } from '../../AuthContext';
import { Login } from '../../containers/index';

function Auth(props) {
  const { currentUser } = useContext(AuthContext);
  const { children } = props;

  return (
    <Fragment>
      {currentUser ? children : <Login></Login>}
    </Fragment>
  );
}

export {
  Auth,
};
