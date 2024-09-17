import { Link, useParams } from "react-router-dom";
import { useProductStore } from "../store/productsStore";
import NotFound from "./NotFound";
import { BsFillCreditCard2FrontFill, BsHeart } from "react-icons/bs";
import { Rate, Typography, Steps, Button, Breadcrumb, Tabs } from "antd";
import { FaCcMastercard, FaCcVisa, FaRegCreditCard } from "react-icons/fa";
import CardProduct from "../components/CardProduct";

const { Title, Text } = Typography;

const ProductDetails = () => {
  const params = useParams();
  const listProducts = useProductStore((state) => state.listProducts);

  const productParam = listProducts.find((product) => product.id == params.id);

  const breadCrumbItems = [
    {
      title: <Link to={"/"}>Home</Link>,
    },
    {
      title: "Producto",
    },
    {
      title: productParam.name,
    },
  ];

  const stepsItems = [
    {
      title: "Información Necessaria",
    },
    {
      title: "En proceso",
    },
    {
      title: "Compra Realizada con Exito!",
    },
  ];

  const tabItems = [
    {
      key: "1",
      label: "Otras Especificaciones",
      children: (
        <div className="grid grid-cols-2 text-base gap-4 lg:gap-6">
          <Text>Fabricante</Text>
          <Text className="font-semibold">
            {productParam.detailedInformation.manufacturer}
          </Text>
          <Text>Peso</Text>
          <Text className="font-semibold">
            {productParam.detailedInformation.productWeight}
          </Text>
          <Text>Pais de Origen</Text>
          <Text className="font-semibold">
            {productParam.detailedInformation.countryOrigin}
          </Text>
          <Text>Tamaño</Text>
          <Text className="font-semibold">
            {productParam.detailedInformation.dimensions}
          </Text>
          <Text>Caracterisíticas</Text>
          <Text className="font-semibold">
            {productParam.detailedInformation.characteristics}
          </Text>
          <Text>Material</Text>
          <Text className="font-semibold">
            {productParam.detailedInformation.material}
          </Text>
        </div>
      ),
    },
    {
      key: "2",
      label: "Reviews",
      children: (
        <div className="grid grid-cols-2 gap-4 place-content-start">
          <Text> Excelente Producto!</Text>
          <Rate defaultValue={productParam.reviews} allowClear={false} />
          <Text>Tiene excelentes especificaciones</Text>
          <Rate defaultValue={5} allowClear={false} />
          <Text>Muy buen rendimiento en general</Text>
          <Rate defaultValue={5} allowClear={false} />
          <Text>Recomendado para profesionales</Text>
          <Rate defaultValue={5} allowClear={false} />
          <Text>Excelente para multitarea</Text>
          <Rate defaultValue={5} allowClear={false} />
          <Text>Diseño elegante y ligero</Text>
          <Rate defaultValue={4} allowClear={false} />
          <Text>Perfecto para viajes</Text>
          <Rate defaultValue={5} allowClear={false} />
        </div>
      ),
    },
  ];

  function hanfleChangesTabs(key) {
    console.log(key);
  }

  function showImagesAccorddingCategory() {
    if (productParam.category === "Smartphone") {
      return listProducts.slice(0, 4);
    } else {
      return listProducts.slice(listProducts.length - 4, listProducts.length);
    }
  }

  return !productParam ? (
    <NotFound />
  ) : (
    <section className="flex flex-col gap-4  w-full px-[4%] py-[2%]">
      <Breadcrumb items={breadCrumbItems} />
      <article className="flex w-full flex-col-reverse gap-5 sm:gap-0 sm:flex-row">
        <div className="w-full sm:w-[45%] lg:w-[35%] flex gap-2">
          <div className="flex flex-col gap-3 p-2 min-w-28">
            {showImagesAccorddingCategory().map((product) => {
              return (
                <img
                  key={product.id}
                  src={product.image}
                  alt={product.name}
                  className="h-24 w-24 border rounded-md object-contain cursor-pointer"
                />
              );
            })}
          </div>
          <div className="p-2 flex-1 flex items-center justify-center relative">
            <BsHeart className="absolute text-4xl right-4 top-4 text-gray-500 cursor-pointer hover:text-red-500 active:text-red-500" />
            <img
              key={productParam.id}
              src={productParam.image}
              alt={productParam.name}
              className="w-full h-[420px]  rounded-md object-contain cursor-pointer"
            />
            {productParam.discount && (
              <div className="rounded-full text-white font-bold h-20 w-20 flex items-center justify-center absolute bottom-3 left-3 bg-red-500 text-4xl">
                {productParam.discount}
              </div>
            )}
          </div>
        </div>
        <div className="w-full sm:w-[55%] lg:w-[65%] flex flex-col gap-4 p-4">
          <div className="flex justify-between">
            <div className="flex flex-col gap-2">
              <Title level={2} className="m-0">
                {productParam.name}
              </Title>
              <Text level={5} className="m-0 text-gray-400 text-base">
                {productParam.detailedInformation.dimensions}
              </Text>
              <Rate defaultValue={productParam.reviews} allowClear={false} />
            </div>
            <div className="flex flex-col items-end gap-2">
              <Title level={2} className="text-blue-700 m-0">
                $ {productParam.price}
              </Title>
              <Text
                level={5}
                className="text-gray-400 line-through m-0 text-base"
              >
                $ {productParam.price + 300}
              </Text>
              <div className="flex gap-3 text-2xl text-gray-400">
                <FaCcVisa />
                <FaCcMastercard />
                <FaRegCreditCard />
                <BsFillCreditCard2FrontFill />
              </div>
            </div>
          </div>
          <Text className="text-sm text-gray-400">
            {productParam.category === "Smartphone"
              ? `Este smartphone destaca por su pantalla de ${productParam.detailedInformation.dimensions} pulgadas de alta resolución y un potente procesador que garantiza un rendimiento fluido. Su cámara de 40 MP con inteligencia artificial captura fotos nítidas en cualquier condición, y la batería de 5000 mAh te acompaña todo el día con carga rápida para que siempre estés conectado.`
              : `Esta laptop combina potencia y portabilidad con un procesador de Intel, 16 GB de RAM y almacenamiento SSD de 512 GB. Su pantalla de ${productParam.detailedInformation.dimensions} pulgadas ofrece una experiencia visual de alta calidad, ideal para trabajo o entretenimiento, y su batería de larga duración asegura horas de productividad sin interrupciones.`}
          </Text>
          <div className="flex flex-col w-full gap-4">
            <Title level={4} className=" m-0">
              Realiza tus compras con calma con los siguientes pasos:
            </Title>
            <Steps size="small" current={1} items={stepsItems} />
            <Button
              size="large"
              className="bg-yellow-300 text-blue-700 border-0 hover:bg-yellow-400 transition self-end px-10 my-5 font-semibold"
            >
              COMPRAR A CRÉDITO
            </Button>
          </div>
        </div>
      </article>
      <Title level={4} className="mx-auto sm:my-6">
        Información Detallada del Producto:
      </Title>
      <article className="w-full grid sm:grid-cols-2 gap-2 sm:gap-10 place-items-center">
        <div className="grid grid-cols-2 gap-4 w-[70%]">
          {showImagesAccorddingCategory().map((product) => {
            return (
              <img
                key={product.id}
                src={product.image}
                alt={product.name}
                className="hidden sm:block sm:w-full sm:h-full border rounded-md object-contain"
              />
            );
          })}
        </div>
        <div className="flex flex-col gap-8 h-full">
          <Tabs
            defaultActiveKey="1"
            items={tabItems}
            onChange={hanfleChangesTabs}
          />
        </div>
      </article>
      <Title level={4} className="my-6 mx-auto">
        Productos Relacionados
      </Title>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4">
        {showImagesAccorddingCategory().map((product, index) => {
          return <CardProduct {...product} key={index} />;
        })}
      </div>
    </section>
  );
};

export default ProductDetails;
