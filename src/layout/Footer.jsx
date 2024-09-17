import { Typography } from "antd";
import React from "react";
import {
  BsInstagram,
  BsFacebook,
  BsLinkedin,
  BsWhatsapp,
} from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import LogoMacroPay from "../components/LogoMacroPay";

const { Title, Text, Link } = Typography;

const Footer = () => {
  return (
    <footer className="bg-yellow-400 w-full px-[4%] py-[4%] pb-[14%] sm:pb-[4%] grid lg:grid-cols-2 relative ">
      <section className="flex flex-col gap-4 ">
        <Title level={4} className="text-blue-800 m-0">
          OFERTAS Y PROMOCIONES
        </Title>
        <Title className="font-bold text-gray-700 m-0">
          No te pierdas nuestras ofertas!
        </Title>
        <div className="p-3 border-b-2 border-black sm:max-w-[70%] flex justify-between">
          <p>Tu dirección de correo electrónico</p>
          <FaTelegramPlane className="text-blue-600 text-4xl" />
        </div>
        <div className="grid  lg:grid-cols-3 gap-4 mt-10">
          <div className="bg-blue-700 flex justify-center items-center rounded-lg pt-1 pb-2 px-4 max-w-[180px]">
            <LogoMacroPay />
          </div>
          <div className="flex flex-col">
            {" "}
            <Link className="text-gray-700 text-base">
              Envíos y devoluciones
            </Link>{" "}
            <Link className="text-gray-700 text-base">
              Preguntas Frecuentes
            </Link>
          </div>
          <div className="flex flex-col">
            {" "}
            <Link className="text-gray-700 text-base">
              Aviso de privacidad
            </Link>{" "}
            <Link className="text-gray-700 text-base">
              Términos y condiciones
            </Link>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-6">
        <Title className="font-bold text-gray-700 m-0">¡Conversemos!</Title>
        <Text className="text-gray-700 text-base">
          Siguenos en todas nuestras redes sociales para estar al tanto de las
          promociones
        </Text>
        <div className="flex gap-4 text-3xl text-gray-700">
          <BsInstagram />
          <BsFacebook />
          <BsLinkedin />
          <BsWhatsapp />
        </div>
      </section>
      <blockquote className="text-xs text-gray-700 mt-auto absolute pl-[4%] bottom-6">
        Todos los derechos reservados - © Macropay 2022
      </blockquote>
    </footer>
  );
};

export default Footer;
