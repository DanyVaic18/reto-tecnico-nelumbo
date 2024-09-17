import { useEffect } from "react";
import { useProductStore } from "../store/productsStore";

const Home = () => {
  const listProducts = useProductStore((state) => state.listProduct);

  useEffect(() => {
    console.log(listProducts);
  }, [listProducts]);

  return (
    <main className="px-[4%] flex w-full bg-slate-200">
      <section className="w-[20%] h-[600px] border-2 border-black p-3 flex flex-col gap-3 ">
        <div className="bg-slate-100 w-full h-full shadow-md">
            
        </div>


      </section>
      <section className="w-[80%] border-2 border-black"></section>
    </main>
  );
};

export default Home;
