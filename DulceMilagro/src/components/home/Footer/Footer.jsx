import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa";
import FooterListTitle from "./FooterListTitle";
import { paymentCard } from "../../../assets/images";
import Image from "../../designLayouts/Image";

const Footer = () => {
  const [emailInfo, setEmailInfo] = useState("");
  const [subscription, setSubscription] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const emailValidation = () => {
    return String(emailInfo)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSubscription = () => {
    if (emailInfo === "") {
      setErrMsg("Por favor, proporciona un correo electrónico!");
    } else if (!emailValidation(emailInfo)) {
      setErrMsg("Introduce un correo válido!");
    } else {
      setSubscription(true);
      setErrMsg("");
      setEmailInfo("");
    }
  };

  return (
    <div className="w-full bg-[#FFE4E1] py-20">
      <div className="max-w-container mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 px-4 gap-10">
        <div className="col-span-2">
          <FooterListTitle title="Más sobre nuestra repostería" />
          <div className="flex flex-col gap-6">
            <p className="text-base w-full xl:w-[80%]">
              Descubre los secretos de la repostería fina. Nos especializamos en
              productos y herramientas de alta calidad para tus creaciones
              dulces.
            </p>
            <ul className="flex items-center gap-2">
              <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                <li className="w-7 h-7 bg-rose-400 text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-rose-600 duration-300">
                  <FaYoutube />
                </li>
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                <li className="w-7 h-7 bg-rose-400 text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-rose-600 duration-300">
                  <FaGithub />
                </li>
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                <li className="w-7 h-7 bg-rose-400 text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-rose-600 duration-300">
                  <FaFacebook />
                </li>
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                <li className="w-7 h-7 bg-rose-400 text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-rose-600 duration-300">
                  <FaLinkedin />
                </li>
              </a>
            </ul>
          </div>
        </div>
        <div>
          <FooterListTitle title="Categorías" />
          <ul className="flex flex-col gap-2">
            <li className="font-titleFont text-base text-lightText hover:text-rose-600 hover:underline decoration-[1px] decoration-rose-400 underline-offset-2 cursor-pointer duration-300">
              Moldes y herramientas
            </li>
            <li className="font-titleFont text-base text-lightText hover:text-rose-600 hover:underline decoration-[1px] decoration-rose-400 underline-offset-2 cursor-pointer duration-300">
              Delantales y utensilios
            </li>
            <li className="font-titleFont text-base text-lightText hover:text-rose-600 hover:underline decoration-[1px] decoration-rose-400 underline-offset-2 cursor-pointer duration-300">
              Ingredientes y decoraciones
            </li>
            <li className="font-titleFont text-base text-lightText hover:text-rose-600 hover:underline decoration-[1px] decoration-rose-400 underline-offset-2 cursor-pointer duration-300">
              Electrodomésticos
            </li>
            <li className="font-titleFont text-base text-lightText hover:text-rose-600 hover:underline decoration-[1px] decoration-rose-400 underline-offset-2 cursor-pointer duration-300">
              Recetas y colecciones
            </li>
          </ul>
        </div>
        <div>
          <FooterListTitle title="Tu cuenta" />
          <ul className="flex flex-col gap-2">
            <li className="font-titleFont text-base text-lightText hover:text-rose-600 hover:underline decoration-[1px] decoration-rose-400 underline-offset-2 cursor-pointer duration-300">
              Perfil
            </li>
            <li className="font-titleFont text-base text-lightText hover:text-rose-600 hover:underline decoration-[1px] decoration-rose-400 underline-offset-2 cursor-pointer duration-300">
              Pedidos
            </li>
            <li className="font-titleFont text-base text-lightText hover:text-rose-600 hover:underline decoration-[1px] decoration-rose-400 underline-offset-2 cursor-pointer duration-300">
              Direcciones
            </li>
            <li className="font-titleFont text-base text-lightText hover:text-rose-600 hover:underline decoration-[1px] decoration-rose-400 underline-offset-2 cursor-pointer duration-300">
              Detalles de cuenta
            </li>
            <li className="font-titleFont text-base text-lightText hover:text-rose-600 hover:underline decoration-[1px] decoration-rose-400 underline-offset-2 cursor-pointer duration-300">
              Opciones de pago
            </li>
          </ul>
        </div>
        <div className="col-span-2 flex flex-col items-center w-full px-4">
          <FooterListTitle title="Suscríbete a nuestro boletín" />
          <div className="w-full">
            <p className="text-center mb-4">
              Recibe las últimas novedades, recetas y promociones exclusivas.
            </p>
            {subscription ? (
              <motion.p
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full text-center text-base font-titleFont font-semibold text-green-600"
              >
                ¡Suscripción exitosa!
              </motion.p>
            ) : (
              <div className="w-full flex-col xl:flex-row flex justify-between items-center gap-4">
                <div className="flex flex-col w-full">
                  <input
                    onChange={(e) => setEmailInfo(e.target.value)}
                    value={emailInfo}
                    className="w-full h-12 border-b border-gray-400 bg-transparent px-4 text-rose-600 text-lg placeholder:text-base outline-none"
                    type="text"
                    placeholder="Introduce tu email ..."
                  />
                  {errMsg && (
                    <p className="text-red-600 text-sm font-semibold font-titleFont text-center animate-bounce mt-2">
                      {errMsg}
                    </p>
                  )}
                </div>
                <button
                  onClick={handleSubscription}
                  className="bg-white text-lightText w-[30%] h-10 hover:bg-rose-600 hover:text-white duration-300 text-base tracking-wide"
                >
                  Suscribirse
                </button>
              </div>
            )}
            <Image
              className={`w-[80%] lg:w-[60%] mx-auto ${
                subscription ? "mt-2" : "mt-6"
              }`}
              imgSrc={paymentCard}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
