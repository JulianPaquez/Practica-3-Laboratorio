import { useState } from "react";

import LoginForm from "./componentes/LoginForm.jsx";

const LoginUser = () => {
  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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
        errorMessage={errorMessage}
      />
    </div>
  );
};

export default LoginUser;
