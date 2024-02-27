import AreaView from "../UI/AreaView";
import { Area } from "../context/types.ts";

import LoginForm from "../components/LoginForm.tsx";

const Login = () => {
  return (
    <AreaView area={Area.LOGIN} fullScreen>
      <section className="bg-[#888888] w-full h-full">

      <LoginForm />
      </section>
    </AreaView>
  );
};

export default Login;
