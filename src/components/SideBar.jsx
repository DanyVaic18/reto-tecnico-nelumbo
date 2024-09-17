import { Checkbox, Drawer, InputNumber, Rate, Typography } from "antd";
import { useState } from "react";
import { MdMenu } from "react-icons/md";

const { Title, Text } = Typography;

const SideBar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const showDrawer = () => {
    setOpenDrawer(true);
  };
  const onClose = () => {
    setOpenDrawer(false);
  };

  const SideBarContent = (sideProps) => {
    console.log(sideProps);
    return (
      <section
        className={` sm:w-[30%] lg:w-[25%] p-3  flex-col gap-3 ${
          sideProps.className || ""
        }`}
      >
        <div className="bg-white w-full shadow-md flex flex-col p-2">
          <div className="p-3 flex flex-col gap-3 border-b border-gray-300">
            <Title level={5} className="text-blue-800">
              Marcas
            </Title>
            <Checkbox>Samsung</Checkbox>
            <Checkbox>Xiaomi</Checkbox>
            <Checkbox>Apple</Checkbox>
            <Checkbox>Lenovo</Checkbox>
            <Checkbox>Asus</Checkbox>
            <Checkbox>Acer</Checkbox>
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
    );
  };

  return (
    <>
      <MdMenu
        className="fixed top-6 right-8 text-4xl block sm:hidden text-white cursor-pointer"
        onClick={showDrawer}
      />
      <SideBarContent className="hidden sm:flex" />

      <Drawer
        title={null}
        placement={"left"}
        closable={false}
        onClose={onClose}
        open={openDrawer}
        key={"left"}
      >
        <SideBarContent className="flex" />
      </Drawer>
    </>
  );
};

export default SideBar;
