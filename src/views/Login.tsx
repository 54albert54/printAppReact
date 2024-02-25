import AreaView from "../UI/AreaView";
import { Area } from "../context/types.ts";

import LoginForm from "../components/LoginForm.jsx";

const Login = () => {
  return (
    <AreaView area={Area.LOGIN} fullScreen>
      <LoginForm />
    </AreaView>
  );
};

export default Login;
