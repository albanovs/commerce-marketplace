import PopularSlider from "./slider";

export default function PopularItems() {
  return (
    <div className="mb-10">
      <div className="font-bold text-2xl mb-5">Популярные товары</div>
      <div className="flex lg:gap-20 gap-5 mb-5 h-[25px] w-full">
        <h1 className="text-sm font-semibold cursor-pointer hover:border-b-2 hover:border-[#1C62CD]">
          Разное
        </h1>
        <h1 className="text-sm font-semibold cursor-pointer hover:border-b-2 hover:border-[#1C62CD]">
          Женские
        </h1>
        <h1 className="text-sm font-semibold cursor-pointer hover:border-b-2 hover:border-[#1C62CD]">
          Мужские
        </h1>
        <h1 className="text-sm font-semibold cursor-pointer hover:border-b-2 hover:border-[#1C62CD]">
          Аксессуары
        </h1>
      </div>
      <PopularSlider />
      <div className="w-[250px] h-[50px] flex justify-center items-center bg-[#F0F0F4] cursor-pointer mx-auto active:opacity-50">
        Показать еще
      </div>
    </div>
  );
}
