import { useProductStore } from "../store/productsStore";
import { Checkbox, InputNumber, Rate, Typography } from "antd";
import CardProduct from "../components/CardProduct";

const { Title, Text } = Typography;

const Home = () => {
  const listProducts = useProductStore((state) => state.listProduct);

  return (
    <main className="px-[1.5%] md:px-[4%] flex w-full bg-gray-100 flex-wrap">
      <section className="w-[30%] lg:w-[20%] p-3 flex flex-col gap-3">
        <div className="bg-white  w-full shadow-md flex flex-col p-2">
          <div className="p-3 flex flex-col gap-3 border-b border-gray-300">
            <Title level={5} className="text-blue-800">
              Marcas
            </Title>
            <Checkbox>Samsung</Checkbox>
            <Checkbox>Xiaomi</Checkbox>
            <Checkbox>Apple</Checkbox>
          </div>
          <div className="p-3 flex flex-col gap-3 border-b border-gray-300">
            <Title level={5} className="text-blue-800">
              Precio
            </Title>
            <div className="flex gap-2">
              <InputNumber
                className="w-full"
                size="large"
                min={100}
                max={100000}
                defaultValue={100}
             
              />
              <Text className="pt-2">~</Text>
              <InputNumber
                className="w-full"
                size="large"
                min={100}
                max={100000}
                defaultValue={100}
                
              />
            </div>
          </div>
          <div className="p-3 flex flex-col gap-3 border-b border-gray-300">
            <Title level={5} className="text-blue-800">
              Reviews
            </Title>
            <Rate defaultValue={4} allowClear={false} />
          </div>
          <div className="p-3 flex flex-col gap-3 border-b border-gray-300">
            <Title level={5} className="text-blue-800 ">
              Caracteristicas
            </Title>
          </div>
          <div className="p-3 flex flex-col gap-3 border-b border-gray-300">
            <Title level={5} className="text-blue-800 ">
              Camara
            </Title>
          </div>
          <div className="p-3 flex flex-col gap-3 ">
            <Title level={5} className="text-blue-800 ">
              Almacenamiento
            </Title>
          </div>
        </div>
      </section>
      <section className="w-[70%] lg:w-[80%] grid lg:grid-cols-2 xl:grid-cols-3 gap-6 place-items-center py-6">
        {listProducts.map((product) => {
          return <CardProduct {...product} key={product.id} />;
        })}
      </section>
    </main>
  );
};

export default Home;
