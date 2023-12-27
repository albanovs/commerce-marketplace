import example from './example.png'

export default function VipItem() {
    return (
        <div className="cursor-pointer hover:shadow-xl transition-all active:shadow-none w-[260px] flex flex-col justify-between h-[400px] border border-[#CDCDCD]">
            <div className="flex justify-between">
                <div className="w-[90px] h-[30px] flex items-center justify-center bg-[#1C62CD] text-white text-sm">Акция</div>
                <div className="font-bold text-[#1C62CD] text-[25px] pr-2">800 сом</div>
            </div>
            <div className="pl-3 text-[#C4C4C4] decaration line-through">200000 сом</div>
            <div className='flex justify-center w-full'><img className='w-[130px]' src={example} alt="" /></div>
            <div className='text-center mx-auto font-bold w-[150px]'>Лодочный мотор Suzuki DF9.9BRS</div>
            <div className='w-full h-[100px] bg-[#F0F0F4] text-center flex flex-col justify-center items-center'>
                <div className='text-[16px]'>Акция действует до</div>
                <div className='text-xl font-bold text-[#1C62CD]'>31.08.2020</div>
            </div>
        </div>
    )
}