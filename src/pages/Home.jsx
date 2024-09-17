import { useProductStore } from "../store/productsStore";
import {Typography } from "antd";
import CardProduct from "../components/CardProduct";
import CarouselHome from "../components/CarouselHome";
import SideBar from "../components/SideBar";

const { Title } = Typography;

const Home = () => {
  const listProducts = useProductStore((state) => state.listProducts);

  return (
    <main className="px-[1.5%] md:px-[4%] flex w-full bg-gray-100 flex-wrap justify-center sm:justify-start">
      <SideBar />
      <section id="tecnologia" className="w-[85%] sm:w-[70%] lg:w-[75%] grid lg:grid-cols-2 xl:grid-cols-3 gap-6 place-items-center py-6 ">
        {listProducts.map((product) => {
          return <CardProduct {...product} key={product.id} />;
        })}
      </section>
      <section id="novedades" className="w-full my-10">
        <Title level={2} className="text-center font-bold ">
          NOVEDADES
        </Title>
        <CarouselHome />
      </section>
      <section id="mas-vendidos" className="w-full my-10">
        <Title level={2} className="text-center font-bold ">
          CELULARES MAS VENDIDOS
        </Title>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          {listProducts.slice(0, 4).map((product, index) => {
            return <CardProduct {...product} key={index} />;
          })}
        </div>
      </section>
      <section className="w-full my-10">
        <Title level={2} className="text-center font-bold ">
          LAPTOPS MAS VENDIDAS
        </Title>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          {listProducts
            .slice(listProducts.length - 4, listProducts.length)
            .map((product, index) => {
              return <CardProduct {...product} key={index} />;
            })}
        </div>
      </section>
    </main>
  );
};

export default Home;
