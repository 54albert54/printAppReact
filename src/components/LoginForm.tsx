import { useRef, useState } from "react";
import FormCheck from "./FormCheck";
import AlarmaLlenar from "./AlarmaLlenar";
import useContext from "../context/provider";


const LoginForm = () => {
  const context = useContext();
  const [values, setValues] = useState({
    userName: "",
    password: "",
  });
 
 
  const [alertas, setAlerta] = useState({
    userName: false,
    password: false,
    userNameInsecure: false,
    passwordInsecure: false,
    userNameNoFound: false,
    passwordNoFound: false,
  });
  const AllAlerts = [
    {
      show: alertas.userName,
      title: "Usuario no valido!",
    },
    {
      show: alertas.password,
      title: "Sin Contraseña!",
    },
    {
      show: alertas.userNameInsecure,
      title: `Usuario no debe de tener ", ', =, , y ;.!`,
    },
    {
      show: alertas.passwordInsecure,
      title: "Password con caracteres no validos !",
    },
    {
      show: alertas.userNameNoFound,
      title: "Usuario y/o Password no validos!",
    },
    {
      show: alertas.passwordNoFound,
      title: "Usuario y/o Password no validos!pp",
    },
  ];

  const inputRefs = [useRef(null), useRef(null)];
  const inputDetails = [
    { name: "userName", placeholder: "Nombre de usuario",type:"text" },
    { name: "password", placeholder: "password",type:"password" },
  ];
  const checkAllCampos = (e) => {
    setAlerta({
      ...alertas,
      userName: false,
      password: false,
      userNameInsecure: false,
      passwordInsecure: false,

      userNameNoFound: false,
      passwordNoFound: false,
    });
    const userValue = e.target.name;
    const value = e.target.value;

    //por si se borrar todo no quede guardado
    if (value.length < 1) {
      setValues({ ...values, [userValue]: "" });
    }

    //filtrar los inputs
    const regex = /^[^\\"'`=,;]+$/;

    if (!regex.test(value)) {
      if (userValue == "userName") {
        setAlerta({ ...alertas, userNameInsecure: true });
      } else {
        setAlerta({ ...alertas, passwordInsecure: true });
      }
      e.target.value = values[userValue].slice(0, value.length - 1);
    }

    //actualizar
    setValues({ ...values, [userValue]: value });
  };
  const handleSubmit = () => {
    const checkUser = values.userName.length < 3;
    const checkPassword = values.password.length < 2;

    if (checkUser) {
      setAlerta({ ...alertas, userName: true });
    }
    if (checkPassword) {
      setAlerta({ ...alertas, password: true });
    }
  

    if (!checkUser && !checkPassword) {
      const auth = context.login(values);
      switch (auth) {
        case "usuarioNoFounded":
          setAlerta({ ...alertas, userNameNoFound: true });
          break;
        case "wrongPassword":
          setAlerta({ ...alertas, passwordNoFound: true });
          break;
        case "successfulLogin":
          
          setValues({
            userName: "",
            password: "",
          })


          break;

        default:
          break;
      }
    }

  };

  return (
  
    <div className="mx-auto mt-20 bg-blue-300 rounded-md shadow-2xl min-w-[530px]   px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">Print App!</h1>
      </div>
      <div className="pl-12 ">
        <AlarmaLlenar alerts={AllAlerts} />
      </div>

      <section className="mx-auto mb-0 mt-8 max-w-md space-y-4">
        <FormCheck
          formFor={"Login"}
          inputRefs={inputRefs}
          inputDetails={inputDetails}
          checkAllCampos={checkAllCampos}
          sendValues={handleSubmit}
        />

        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">
            No account?
            <a className="underline" href="#">
              Sign up
            </a>
          </p>

          <button
            type="reset"
            onClick={handleSubmit}
            className="inline-block shadow-xl  rounded-lg active:bg-blue-800 hover:bg-blue-700 bg-blue-500 px-5 py-3 text-sm font-medium text-white"
          >
            Sign in
          </button>
        </div>
      </section>
    </div>
  );
};

export default LoginForm;
