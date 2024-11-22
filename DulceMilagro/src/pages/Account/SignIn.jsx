import React, { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { logoLight } from "../../assets/images";

const SignIn = () => {
  // ============= Initial State Start here =============
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // ============= Initial State End here ===============
  // ============= Error Msg Start here =================
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  // ============= Error Msg End here ===================
  const [successMsg, setSuccessMsg] = useState("");
  // ============= Event Handler Start here =============
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };
  // ============= Event Handler End here ===============
  const handleSignUp = (e) => {
    e.preventDefault();

    if (!email) {
      setErrEmail("Por favor, ingresa tu correo.");
    }

    if (!password) {
      setErrPassword("Por favor, crea una contraseña.");
    }

    if (email && password) {
      setSuccessMsg(
        `¡Hola! Gracias por iniciar sesión. Estamos validando tus datos y pronto podrás disfrutar de las delicias que tenemos preparadas para ti. Revisa tu correo en ${email} para más detalles.`
      );
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-1/2 hidden lgl:inline-flex h-full text-white">
        <div className="w-[450px] h-full bg-pink-500 px-10 flex flex-col gap-6 justify-center">
          <Link to="/">
            <img src={logoLight} alt="logoImg" className="w-28" />
          </Link>
          <div className="flex flex-col gap-1 -mt-1">
            <h1 className="font-titleFont text-xl font-medium">
              ¡Bienvenido a SweetTreats!
            </h1>
            <p className="text-base">Inicia sesión y disfruta de lo dulce.</p>
          </div>
          <div className="w-[300px] flex items-start gap-3">
            <span className="text-yellow-300 mt-1">
              <BsCheckCircleFill />
            </span>
            <p className="text-base text-gray-200">
              <span className="text-white font-semibold font-titleFont">
                Ofertas exclusivas
              </span>
              <br />
              Descubre descuentos y promociones especiales en nuestras delicias.
            </p>
          </div>
          <div className="w-[300px] flex items-start gap-3">
            <span className="text-yellow-300 mt-1">
              <BsCheckCircleFill />
            </span>
            <p className="text-base text-gray-200">
              <span className="text-white font-semibold font-titleFont">
                Acceso a recetas y más
              </span>
              <br />
              ¡Inspírate con nuestras recetas exclusivas para tus postres!
            </p>
          </div>
          <div className="w-[300px] flex items-start gap-3">
            <span className="text-yellow-300 mt-1">
              <BsCheckCircleFill />
            </span>
            <p className="text-base text-gray-200">
              <span className="text-white font-semibold font-titleFont">
                Confiado por amantes de lo dulce
              </span>
              <br />
              Sé parte de una comunidad que ama las mejores creaciones dulces.
            </p>
          </div>
          <div className="flex items-center justify-between mt-10">
            <Link to="/">
              <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
                © SweetTreats
              </p>
            </Link>
            <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
              Términos
            </p>
            <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
              Privacidad
            </p>
            <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
              Seguridad
            </p>
          </div>
        </div>
      </div>
      <div className="w-full lgl:w-1/2 h-full">
        {successMsg ? (
          <div className="w-full lgl:w-[500px] h-full flex flex-col justify-center">
            <p className="w-full px-4 py-10 text-green-500 font-medium font-titleFont">
              {successMsg}
            </p>
            <Link to="/signup">
              <button
                className="w-full h-10 bg-pink-500 text-gray-200 rounded-md text-base font-titleFont font-semibold 
                tracking-wide hover:bg-pink-700 hover:text-white duration-300"
              >
                Regístrate
              </button>
            </Link>
          </div>
        ) : (
          <form className="w-full lgl:w-[450px] h-screen flex items-center justify-center">
            <div className="px-6 py-4 w-full h-[90%] flex flex-col justify-center overflow-y-scroll scrollbar-thin scrollbar-thumb-pink-500">
              <h1 className="font-titleFont underline underline-offset-4 decoration-[1px] font-semibold text-3xl mdl:text-4xl mb-4">
                Inicia sesión
              </h1>
              <div className="flex flex-col gap-3">
                {/* Email */}
                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Correo electrónico
                  </p>
                  <input
                    onChange={handleEmail}
                    value={email}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="email"
                    placeholder="ejemplo@correo.com"
                  />
                  {errEmail && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errEmail}
                    </p>
                  )}
                </div>
                {/* Password */}
                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Contraseña
                  </p>
                  <input
                    onChange={handlePassword}
                    value={password}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="password"
                    placeholder="Crea tu contraseña"
                  />
                  {errPassword && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errPassword}
                    </p>
                  )}
                </div>
                <button
                  onClick={handleSignUp}
                  className="bg-pink-500 hover:bg-pink-700 text-gray-200 hover:text-white cursor-pointer w-full text-base font-medium h-10 rounded-md  duration-300"
                >
                  Iniciar sesión
                </button>
                <p className="text-sm text-center font-titleFont font-medium">
                  ¿No tienes una cuenta?{" "}
                  <Link to="/signup">
                    <span className="hover:text-pink-700 duration-300">
                      Regístrate
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignIn;
