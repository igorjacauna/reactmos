import { useEffect } from "react";
import userStore from "../store/userStore";
import { useNavigate } from 'react-router-dom';
import { observer } from "mobx-react-lite";

const Login = observer(() => {
  const navigate = useNavigate();
  const login = () => {
    userStore.setToken('abcd');
    navigate('/private');
  }

  useEffect(() => {
    if (userStore.token) {
      navigate('/private');
    }
  }, [navigate])
  return (
    <div>
      <button onClick={login}>Entrar</button>
    </div>
  );
});

export default Login;