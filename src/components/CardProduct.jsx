import { Button, Rate, Typography } from "antd";
import { BsHeart } from "react-icons/bs";

const { Title, Text } = Typography;

const CardProduct = (product) => {
  console.log(product);
  return (
    <div className="flex flex-col shadow-lg rounded-2xl border w-[90%]">
      <div className="p-4 w-full px-8 relative">
        <BsHeart className="absolute text-3xl right-4 text-gray-500"></BsHeart>
        <img
          src={product.image}
          alt={product.name}
          className="h-[420px] w-full border rounded-md object-cover"
        />
      </div>
      <div className="grid grid-cols-2 gap-1 p-4">
        <div className="flex flex-col gap-2 p-4">
          <p className="font-semibold">{product.name}</p>
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
            ${product.price - 200}
          </Title>
          <Button
            size="large"
            className="bg-yellow-400 text-blue-700 border-0 hover:bg-yellow-500 transition font-semibold"
          >
            Lo Quiero!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
