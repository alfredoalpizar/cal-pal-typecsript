import { Route } from 'react-router-dom';
import * as React from 'react';
import { useDispatch } from 'react-redux';

// import { verifyToken } from '../actions/index';
import Login from './Login';

const Content: React.FC = () => {
  const dispatch = useDispatch();
  // React.useEffect(() => dispatch(verifyToken()));
  // const loggedIn = useSelector(state => state.user.loggedIn);
  // console.log(loggedIn);
  return (
    <div style={{ flex: 1, padding: '10px' }}>
      <Route path="/" component={Login} />
      {/* <Route/> */}
    </div>
  );
};

export default Content;
