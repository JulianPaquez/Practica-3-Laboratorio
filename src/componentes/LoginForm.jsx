import PropTypes from "prop-types";

const LoginForm = ({
  username,
  updateUserName,
  registerUser,
  errorMessage,
}) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Ingrese su nombre de usuario"
        value={username}
        onChange={(event) => {
          updateUserName(event);
          if (
            event.target.value.includes("o") ||
            event.target.value.includes("O")
          ) {
            alert("Por favor, ¡Nombres de usuario sin la letra 'o'!");
          }
        }}
      />
      <button onClick={registerUser}>Registrarse</button>

      <p>{errorMessage}</p>
      <p>Nombre de usuario ingresado: {username}</p>
    </div>
  );
};

// Tuve que agregar esto ya que no me permitía ejecutar el codigo porque me aparecia un error, por lo que busqué en internet y vi que tenia que poner esto
LoginForm.propTypes = {
  username: PropTypes.string.isRequired,
  updateUserName: PropTypes.func.isRequired,
  registerUser: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
};

export default LoginForm;
