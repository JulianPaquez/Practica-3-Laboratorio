import { useState } from "react";

import LoginForm from "./componentes/Login.jsx";

const LoginUser = () => {
  const [username, setUsername] = useState("");
  const [ErrorMessage, setErrorMessage] = useState("");

  const updateUserName = (event) => {
    const value = event.target.value;
    setUsername(value);
  };

  const registerUser = () => {
    if (username.trim() === "") {
      setErrorMessage("Usuario inválido para registrarse");
      alert("Usuario inválido para registrarse");
    } else if (username.includes("o") || username.includes("O")) {
      alert("Por favor, ¡Nombres de usuario sin la letra 'o'!");
    } else {
      alert("¡Usuario registrado correctamente!");
    }
  };

  return (
    <div>
      <LoginForm
        username={username}
        updateUserName={updateUserName}
        registerUser={registerUser}
        ErrorMessage={ErrorMessage}
      />
    </div>
  );
};

export default LoginUser;
