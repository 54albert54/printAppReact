import { useState } from "react";

const InputComponent = ({
  inputDetails,
  index,
  checkAllCampos,
  inputRef,
  handleKeyDown,
}) => {
  const [showPassword, setShowPassword] = useState("password");
  const isPasswordType = inputDetails[index].name == showPassword;

  return (
    <label
      htmlFor={inputDetails[index].name}
      className={`
      ${
        inputDetails[index].name == "password"
          ? " flex justify-between pr-6"
          : ""
      }
    relative w-full h-12 py-2 pl-3 block rounded-md border bg-white border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600`}
    >
      <input
        type={isPasswordType ? "password" : "text"}
        name={inputDetails[index].name}
        placeholder={inputDetails[index].placeholder}
        onChange={checkAllCampos}
        onKeyDown={(event) => handleKeyDown(event, index)}
        ref={inputRef}
        className="peer w-full border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 bg-[#f3f4f6]"
      />
      <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 rounded-lg p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:my-2">
        {inputDetails[index].placeholder}
      </span>
      {inputDetails[index].name == "password" && (
        <EyeIcon
          isPasswordType={isPasswordType}
          setShowPassword={setShowPassword}
        />
      )}
    </label>
  );
};

export default InputComponent;

const EyeIcon = ({ isPasswordType, setShowPassword }) => {

  const showPassword = ()=>{
    setShowPassword("")
    setTimeout(() => {
      setShowPassword("password")
    }, 3000);
  }
  return (
    <div
      className="  cursor-pointer stroke-gray-500 active:stroke-blue-500"
      onClick={showPassword}
    >
      {isPasswordType ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-eye-closed"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M21 9c-2.4 2.667 -5.4 4 -9 4c-3.6 0 -6.6 -1.333 -9 -4" />
          <path d="M3 15l2.5 -3.8" />
          <path d="M21 14.976l-2.492 -3.776" />
          <path d="M9 17l.5 -4" />
          <path d="M15 17l-.5 -4" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-eye"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
          <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
        </svg>
      )}
    </div>
  );
};
