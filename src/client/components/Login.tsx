import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const dispatch = useDispatch();
  const submit = () => {
    // dispatch(login({ username, password }));
  };
  return (
    <div className="login">

  Username:
      <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
  Password:
      <input type="text" value={password} onChange={e => setPassword(e.target.value)} />
      <button type="button" onClick={submit}>Login</button>
      <Link to="/signup">Signup</Link>

    </div>
  );
};

export default Login;
