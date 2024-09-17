import { Button, Typography } from "antd";
import logoMacroPay from "../assets/nabvar/logo-macro-pay.svg";
import { MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

const { Text } = Typography;

const Navbar = () => {
  return (
    <header className="min-h-20 px-[4%] py-2 bg-blue-700 flex items-center">
      <nav className="flex items-center gap-3 lg:justify-between w-full sm:pr-[14%] lg:pr-[8%]">
        <Link to={"/"}>
            <img
              src={logoMacroPay}
              alt="logo"
              className="w-full max-w-[120px] sm:max-w-[200px] pt-3"
            />
        </Link>
        <div className="flex gap-2 items-center">
          <Button
            size="large"
            className="bg-yellow-400 text-blue-700 border-0 hover:bg-yellow-500 transition"
          >
            Crea Tu Cuenta
          </Button>
          <Button
            size="large"
            className="bg-blue-700 border-blue-700 text-yellow-400 hover:border hover:border-yellow-400 transition"
          >
            Iniciar Sesión
          </Button>
          <MdShoppingCart className="text-white text-xl" />
        </div>
      </nav>
      <article className="hidden md:flex absolute -right-12 -top-12 w-52 h-52 bg-gradient-to-tr from-yellow-400 to-yellow-600 rounded-full *:m-0 *:text-white  flex-col items-center pt-24 font-light rotate-45">
        <Text className="text-2xl">COMPRA A</Text>
        <Text className="text-4xl">CRÉDITO</Text>
      </article>
    </header>
  );
};

export default Navbar;
