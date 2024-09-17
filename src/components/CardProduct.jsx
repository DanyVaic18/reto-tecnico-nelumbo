import { Button, Modal, Rate, Typography } from "antd";
import { useState } from "react";
import { BsHeart } from "react-icons/bs";
import BuyProductModal from "./BuyProductModal";
import { Link } from "react-router-dom";

const { Title, Text } = Typography;

const CardProduct = (product) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col shadow-lg rounded-2xl border w-[95%]">
      <div className="p-4 w-full px-8 relative">
        <BsHeart className="absolute text-3xl right-4 text-gray-500 hover:text-red-500 active:text-red-500"/>
        <Link to={`/products/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="h-[320px] w-full rounded-md object-contain cursor-pointer"
          />
        </Link>
        {product.discount && (
          <div className="rounded-full text-white font-bold h-20 w-20 flex items-center justify-center absolute bottom-3 left-3 bg-red-500 text-4xl">
            {product.discount}
          </div>
        )}
      </div>
      <div className="grid grid-cols-2 gap-1 p-4">
        <div className="flex flex-col gap-2 ">
          <Link
            to={`/products/${product.id}`}
            className="font-semibold text-base"
            title={product.name}
          >
            {product.name}
          </Link>
          <Rate defaultValue={product.reviews} allowClear={false} />
          <Text className="text-base font-medium text-balance w-[70%] text-gray-500 truncates">
            {" "}
            {"$70 p/semana o $200p/mes"}
          </Text>
        </div>
        <div className="flex flex-col gap-2 items-end justify-around">
          <Title level={3} className="text-blue-800 m-0">
            {" "}
            ${product.price}
          </Title>
          <Title level={5} className="text-gray-400 line-through m-0">
            {" "}
            ${Number(product.price) + 300}
          </Title>
          <Button
            size="large"
            className="bg-yellow-400 text-blue-700 border-0 hover:bg-yellow-500 transition font-semibold"
            onClick={showModal}
          >
            Lo Quiero!
          </Button>
        </div>
      </div>
      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        width={500}
        footer={null}
      >
        <BuyProductModal product={product} />
      </Modal>
    </div>
  );
};

export default CardProduct;
