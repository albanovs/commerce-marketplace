import { FaInstagram } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";
import { FaFacebook } from "react-icons/fa";
import { SiYoutubemusic } from "react-icons/si";

export const Footer = () => {
    return (
        <div>
            <div className="w-full lg:h-[300px] bg-[#F0F0F4]">
                <div className="lg:w-[1170px] lg:h-[250px] mx-auto ">
                    <div className="flex lg:h-[250px] lg:flex-row flex-col justify-between pl-3 lg:items-center">
                        <div className="flex flex-col gap-10">
                            <h1 className="font-bold">Подпишитесь на нашу рассылку <br />
                                и узнавайте об акциях быстрее</h1>
                            <div>
                                <input
                                    placeholder="Введите ваш e-mail:"
                                    type="text" className="outline-none w-[200px] h-[30px] px-3 text-sm" />
                                <button className="w-[110px] text-sm h-[30px] text-white bg-[#1C62CD]">Отправить</button>
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">Ифнформация</div>
                            <div className="cursor-pointer hover:text-[#1C62CD]">О компании</div>
                            <div className="cursor-pointer hover:text-[#1C62CD]">Контакты</div>
                            <div className="cursor-pointer hover:text-[#1C62CD]">Акции</div>
                            <div className="cursor-pointer hover:text-[#1C62CD]">Магазины</div>
                        </div>
                        <div>
                            <div className="font-bold">Интернет магазин</div>
                            <div className="cursor-pointer hover:text-[#1C62CD]">Доставка и самовызов</div>
                            <div className="cursor-pointer hover:text-[#1C62CD]">Оплата</div>
                            <div className="cursor-pointer hover:text-[#1C62CD]">Возврат и обмен</div>
                            <div className="cursor-pointer hover:text-[#1C62CD]">Новости</div>
                        </div>
                        <div className="flex gap-3">
                            <div><FaInstagram size={25} className="cursor-pointer" /></div>
                            <div><SlSocialVkontakte size={25} className="cursor-pointer" /></div>
                            <div><FaFacebook size={25} className="cursor-pointer" /></div>
                            <div><SiYoutubemusic size={25} className="cursor-pointer" /></div>
                        </div>
                    </div>
                    <div className="flex justify-center gap-5 text-[10px]">
                        <h1 className="cursor-pointer hover:text-[#1C62CD]">Договор оферты</h1>
                        <h1 className="cursor-pointer hover:text-[#1C62CD]">Политика обработки персональных данных</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}