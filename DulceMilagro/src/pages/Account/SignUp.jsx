import React, { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { logoLight } from "../../assets/images";

const SignUp = () => {
  // Estados iniciales combinados
  const [formData, setFormData] = useState({
    clientName: "",
    email: "",
    phone: "",
    password: "",
    address: "",
    city: "",
    country: "",
    zip: "",
    checked: false,
  });

  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState("");

  // Validación de email
  const isValidEmail = (email) =>
    String(email)
      .toLowerCase()
      .match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);

  // Manejador de cambios en los inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  // Validaciones del formulario
  const validateForm = () => {
    const newErrors = {};
    const { clientName, email, phone, password, address, city, country, zip } =
      formData;

    if (!clientName.trim()) newErrors.clientName = "Ingresa tu nombre completo.";
    if (!email.trim()) {
      newErrors.email = "Ingresa tu correo electrónico.";
    } else if (!isValidEmail(email)) {
      newErrors.email = "El correo no es válido.";
    }
    if (!phone.trim()) newErrors.phone = "Ingresa tu número de teléfono.";
    if (!password.trim()) {
      newErrors.password = "Crea una contraseña.";
    } else if (password.length < 6) {
      newErrors.password = "La contraseña debe tener al menos 6 caracteres.";
    }
    if (!address.trim()) newErrors.address = "Ingresa tu dirección.";
    if (!city.trim()) newErrors.city = "Ingresa tu ciudad.";
    if (!country.trim()) newErrors.country = "Ingresa tu país.";
    if (!zip.trim()) newErrors.zip = "Ingresa tu código postal.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Manejador del formulario
  const handleSignUp = (e) => {
    e.preventDefault();

    if (!formData.checked) {
      setErrors({ ...errors, checked: "Debes aceptar los términos y condiciones." });
      return;
    }

    if (validateForm()) {
      setSuccessMsg(
        `¡Hola ${formData.clientName}! Bienvenido al mundo de Delicias Dulces. Pronto recibirás un correo de confirmación a ${formData.email}.`
      );
      setFormData({
        clientName: "",
        email: "",
        phone: "",
        password: "",
        address: "",
        city: "",
        country: "",
        zip: "",
        checked: false,
      });
      setErrors({});
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-start">
      <div className="w-1/2 hidden lgl:inline-flex h-full text-white bg-pink-400">
        <div className="w-[450px] h-full px-10 flex flex-col gap-6 justify-center">
          <Link to="/">
            <img src={logoLight} alt="logoImg" className="w-28" />
          </Link>
          <div className="flex flex-col gap-1 -mt-1">
            <h1 className="font-titleFont text-xl font-medium">
              Empieza tu aventura dulce
            </h1>
            <p className="text-base">Crea tu cuenta y accede a ofertas exclusivas</p>
          </div>
          <div className="w-[300px] flex items-start gap-3">
            <span className="text-green-500 mt-1">
              <BsCheckCircleFill />
            </span>
            <p className="text-base text-gray-200">
              Acceso exclusivo a productos de repostería.
            </p>
          </div>
          <div className="w-[300px] flex items-start gap-3">
            <span className="text-green-500 mt-1">
              <BsCheckCircleFill />
            </span>
            <p className="text-base text-gray-200">
              <span className="font-semibold">Soporte personalizado.</span>
            </p>
          </div>
        </div>
      </div>
      <div className="w-full lgl:w-[500px] h-full flex flex-col justify-center bg-pink-100">
        {successMsg ? (
          <div className="w-[500px]">
            <p className="px-4 py-10 text-green-500 font-medium">{successMsg}</p>
            <Link to="/signin">
              <button className="w-full h-10 bg-pink-500 text-white rounded-md font-semibold hover:bg-pink-600">
                Iniciar sesión
              </button>
            </Link>
          </div>
        ) : (
          <form className="px-6 py-4 w-full h-[96%] flex flex-col gap-4">
            <h1 className="text-2xl font-semibold underline decoration-pink-500">
              Crear cuenta
            </h1>
            {["clientName", "email", "phone", "password", "address", "city", "country", "zip"].map((field) => (
              <div key={field}>
                <label className="block font-semibold capitalize">{field}</label>
                <input
                  type={field === "password" ? "password" : "text"}
                  name={field}
                  value={formData[field]}
                  onChange={handleInputChange}
                  className="w-full border px-4 py-2 rounded-md"
                  placeholder={`Ingresa tu ${field}`}
                />
                {errors[field] && (
                  <p className="text-red-500 text-sm">{errors[field]}</p>
                )}
              </div>
            ))}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="checked"
                checked={formData.checked}
                onChange={(e) =>
                  setFormData({ ...formData, checked: e.target.checked })
                }
              />
              <label>
                Acepto los{" "}
                <Link to="/terms" className="text-pink-600 underline">
                  términos y condiciones
                </Link>
              </label>
            </div>
            {errors.checked && (
              <p className="text-red-500 text-sm">{errors.checked}</p>
            )}
            <button
              onClick={handleSignUp}
              className="w-full bg-pink-500 text-white py-2 rounded-md font-semibold hover:bg-pink-600"
            >
              Registrarse
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignUp;
