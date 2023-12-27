import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import next from './next.png'
import prev from './prev.png'
import { FaRegHeart, FaHeart } from "react-icons/fa";
import example from '../vip-item/example.png'
import { SlBasket } from "react-icons/sl";

export default function PopularSlider() {

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <img
                src={next}
                className={className}
                style={{
                    ...style, display: "block",
                    height: '30px'
                }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <img
                src={prev}
                className={className}
                style={{
                    ...style, display: "block",
                    height: '30px'
                }}
                onClick={onClick}
            />
        );
    }


    function SampleNextArrowres(props) {
        const { className, style, onClick } = props;
        return (
            <img
                src={next}
                className={className}
                style={{
                    ...style, display: "block",
                    height: '30px',
                    position: 'absolute',
                    right: '20px'
                }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrowres(props) {
        const { className, style, onClick } = props;
        return (
            <img
                src={prev}
                className={className}
                style={{
                    ...style, display: "block",
                    height: '30px',
                    position: 'absolute',
                    left: '20px'
                }}
                onClick={onClick}
            />
        );
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    nextArrow: <SampleNextArrowres />,
                    prevArrow: <SamplePrevArrowres />
                }
            }
        ]
    };

    return (
        <div className='w-full '>
            <Slider {...settings}>
                <div>
                    <div
                        className='relative flex flex-col justify-between items-center w-[270px] h-[350px] border border-[#E0E0E0] hover:shadow-xl hover:text-[#1C62CD] active:shadow-none transition-all rounded-sm  mx-auto'>
                        <div className='w-full flex justify-between items-center'>
                            <div className='flex items-center justify-center text-white bg-[#1C62CD] w-[80px] h-[35px] text-sm'>Акция</div>
                            <FaRegHeart className='mr-5 cursor-pointer text-black' size={20} />
                        </div>
                        <div><img className='w-[130px]' src={example} alt="" /></div>
                        <div className='mb-10'>
                            <h1 className='text-center w-[200px] text-sm'>Водонепроницаемый Рюкзак</h1>
                            <h1 className='text-center font-bold text-xl'>1000 сом</h1>
                        </div>
                        <div className='cursor-pointer w-[60px] h-[40px] bg-[#1C62CD] rounded-tl-[10px] absolute right-0 bottom-0 text-white flex justify-center items-center'><SlBasket size={30} /></div>
                    </div>
                </div>
                <div>
                    <div
                        className='relative flex flex-col justify-between items-center w-[270px] h-[350px] border border-[#E0E0E0] hover:shadow-xl hover:text-[#1C62CD] active:shadow-none transition-all rounded-sm  mx-auto'>
                        <div className='w-full flex justify-between items-center'>
                            <div className='flex items-center justify-center text-white bg-[#1C62CD] w-[80px] h-[35px] text-sm'>Акция</div>
                            <FaRegHeart className='mr-5 cursor-pointer text-black' size={20} />
                        </div>
                        <div><img className='w-[130px]' src={example} alt="" /></div>
                        <div className='mb-10'>
                            <h1 className='text-center w-[200px] text-sm'>Водонепроницаемый Рюкзак</h1>
                            <h1 className='text-center font-bold text-xl text-black'>нет в наличии</h1>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className='relative flex flex-col justify-between items-center w-[270px] h-[350px] border border-[#E0E0E0] hover:shadow-xl hover:text-[#1C62CD] active:shadow-none transition-all rounded-sm  mx-auto'>
                        <div className='w-full flex justify-between items-center'>
                            <div className='flex items-center justify-center text-white bg-[#1C62CD] w-[80px] h-[35px] text-sm'>Акция</div>
                            <FaRegHeart className='mr-5 cursor-pointer text-black' size={20} />
                        </div>
                        <div><img className='w-[130px]' src={example} alt="" /></div>
                        <div className='mb-10'>
                            <h1 className='text-center w-[200px] text-sm'>Водонепроницаемый Рюкзак</h1>
                            <h1 className='text-center font-bold text-xl'>1000 сом</h1>
                        </div>
                        <div className='cursor-pointer w-[60px] h-[40px] bg-[#1C62CD] rounded-tl-[10px] absolute right-0 bottom-0 text-white flex justify-center items-center'><SlBasket size={30} /></div>
                    </div>
                </div>
                <div>
                    <div
                        className='relative flex flex-col justify-between items-center w-[270px] h-[350px] border border-[#E0E0E0] hover:shadow-xl hover:text-[#1C62CD] active:shadow-none transition-all rounded-sm  mx-auto'>
                        <div className='w-full flex justify-between items-center'>
                            <div className='flex items-center justify-center text-white bg-[#1C62CD] w-[80px] h-[35px] text-sm'>Акция</div>
                            <FaRegHeart className='mr-5 cursor-pointer text-black' size={20} />
                        </div>
                        <div><img className='w-[130px]' src={example} alt="" /></div>
                        <div className='mb-10'>
                            <h1 className='text-center w-[200px] text-sm'>Водонепроницаемый Рюкзак</h1>
                            <h1 className='text-center font-bold text-xl'>1000 сом</h1>
                        </div>
                        <div className='cursor-pointer w-[60px] h-[40px] bg-[#1C62CD] rounded-tl-[10px] absolute right-0 bottom-0 text-white flex justify-center items-center'><SlBasket size={30} /></div>
                    </div>
                </div>
                <div>
                    <div
                        className='relative flex flex-col justify-between items-center w-[270px] h-[350px] border border-[#E0E0E0] hover:shadow-xl hover:text-[#1C62CD] active:shadow-none transition-all rounded-sm  mx-auto'>
                        <div className='w-full flex justify-between items-center'>
                            <div className='flex items-center justify-center text-white bg-[#1C62CD] w-[80px] h-[35px] text-sm'>Акция</div>
                            <FaRegHeart className='mr-5 cursor-pointer text-black' size={20} />
                        </div>
                        <div><img className='w-[130px]' src={example} alt="" /></div>
                        <div className='mb-10'>
                            <h1 className='text-center w-[200px] text-sm'>Водонепроницаемый Рюкзак</h1>
                            <h1 className='text-center font-bold text-xl'>1000 сом</h1>
                        </div>
                        <div className='cursor-pointer w-[60px] h-[40px] bg-[#1C62CD] rounded-tl-[10px] absolute right-0 bottom-0 text-white flex justify-center items-center'><SlBasket size={30} /></div>
                    </div>
                </div>
            </Slider>
        </div>
    )
}