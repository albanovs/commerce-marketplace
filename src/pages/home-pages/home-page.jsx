import CartItem from "../../components/cart-item/cart-item";
import PopularItems from "../../components/popular-items/popular-items";
import SLider from "../../components/slider/slider";
import VipItem from "../../components/vip-item/vip-item";

export default function HomePage() {
  return (
    <div>
      <div className="mx-auto lg:w-[1170px]">
        <div className="mt-10 mb-10 flex lg:flex-row flex-col items-center justify-between">
          <SLider />
          <VipItem />
        </div>
        <div className="mb-20 flex flex-wrap  justify-center items-center lg:justify-between gap-5">
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <div>
          <PopularItems />
        </div>
      </div>
    </div>
  );
}
