import { Button, Divider, Typography } from "antd";
import bannerModalProduct from "../assets/productos/banner-modal-products.jpg";
import { Link } from "react-router-dom";
const { Title, Text } = Typography;

const BuyProductModal = (product) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <img
        src={bannerModalProduct}
        alt={"banner"}
        className="w-[90%] rounded-md object-contain"
      />
      <div className="flex gap-2 w-[90%]">
        <img
          src={product.product.image}
          alt={product.product.name}
          className=" max-h-[120px] rounded-md object-contain shadow-lg"
        />
        <div className="flex-1 flex flex-col pt-4">
          <Text className="text-blue-700 text-sm font-medium text-end">
            $ {product.product.price} x 1
          </Text>
          <Link
            to={`/products/${product.product.id}`}
            className="m-0 text-lg font-semibold"
          >
            {product.product.name}
          </Link>

          <Text className="text-gray-400 text-sm font-medium ">
            <span>Color Seleccionado:</span>{" "}
            {product.product.detailedInformation?.color}
          </Text>
        </div>
      </div>
      <div className="border-y border-gray-300 w-full py-2 px-[2%] flex justify-between">
        <Text className="text-gray-400 text-sm font-medium ">
          1 ítem en tu carrito:
        </Text>
        <Text className="text-blue-700 text-sm font-medium text-end">
          <span className="text-gray-400">Subtotal</span> ${" "}
          {product.product.price}
        </Text>
      </div>
      <div className="flex flex-col gap-2 justify-center items-center">
        <Title level={5} className="m-0">
          Te vas a llevar este celular por solo
        </Title>
        <Title level={4} className="m-0">
          $ 70 p/semana!
        </Title>
        <Link to={`/products/${product.product.id}`}>
          <Button
            size="large"
            className="bg-yellow-400 text-blue-700 border-0 hover:bg-yellow-500 transition"
          >
            COMPRAR A CRÉDITO
          </Button>
        </Link>
        <Divider className="text-sm text-gray-400 italic">o puedes</Divider>
        <Text className="text-blue-700 text-sm font-medium text-end">
          Comprar a contado
        </Text>
      </div>
    </div>
  );
};

export default BuyProductModal;
