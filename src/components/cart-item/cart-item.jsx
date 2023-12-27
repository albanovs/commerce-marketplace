import example from '../vip-item/example.png'
import { MdNavigateNext } from "react-icons/md";

export default function CartItem() {
    return (
        <div className="w-[370px] hover:text-[#1C62CD] active:shadow-none cursor-pointer h-[130px] hover:border-none hover:shadow-lg transition-shadow border rounded-sm border-[#CDCDCD]">
            <div className='flex h-[130px] justify-between items-center'>
                <div className='flex flex-col justify-between h-[130px] py-2 pt-3 pl-5'>
                    <h1 className='font-bold text-xl'>Толстовки</h1>
                    <h1 className='text-[#C4C4C4] text-sm flex items-center gap-1'>Подробнее <MdNavigateNext className='relative top-[2px]' /></h1>
                </div>
                <div><img className='w-[100px] h-[100px] pr-5' src={example} alt="" /></div>
            </div>
        </div>
    )
}