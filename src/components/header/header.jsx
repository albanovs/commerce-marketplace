import React from "react"
import { IoMdHeartEmpty } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaShop, FaFire } from "react-icons/fa6";
import { CgAppleWatch } from "react-icons/cg";
import { MdOutlineDesktopWindows } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";


export const Header = () => {

    const [res, setRes] = useState('translate-x-[-100%]')

    return (
        <div>
            <div className="flex lg:shadow-none bg-white shadow-md lg:static fixed top-0 left-0 right-0 z-[50] justify-between mx-auto lg:w-[1170px] lg:h-20 h-[50px] px-3 items-center">
                <GiHamburgerMenu className="lg:hidden" onClick={() => setRes('translate-x-none')} />
                <div className="hidden lg:flex gap-2 text-sm">
                    <button className="border border-black/70 py-2 px-3 rounded-sm">Войти</button>
                    <button className="border rounded-sm bg-[#1C62CD] px-4 text-white">Регистрация</button>
                </div>
                <div className="hidden lg:flex font-bold items-center gap-1">
                    <FaMapMarkerAlt />
                    <h1 >Кыргызстан, бишкек</h1>
                </div>
                <div className="flex items-center gap-3">
                    <IoMdHeartEmpty size={20} className="cursor-pointer" />
                    <FaUserAlt size={20} className="cursor-pointer" />
                    <SlBasket size={20} className="cursor-pointer" />
                </div>
            </div>
            <div
                className={`lg:w-[1170px]
            transition duration-500 lg:translate-x-0
            ${res}
            lg:mx-auto pl-5 pr-20 py-5 lg:pl-0 lg:pr-0 lg:py-0 lg:h-20 h-[100vh]
            lg:static fixed top-0 left-0 z-50 bg-[#F0F0F4] flex lg:flex-row flex-col gap-5 lg:justify-evenly lg:items-center`
                }>
                <IoMdClose onClick={() => setRes('translate-x-[-100%]')} className="absolute right-5 lg:hidden" />
                <div className="cursor-pointer hover:text-[#1C62CD] font-semibold hover:transition-all flex items-center gap-2"> <FaShop />Магазины</div>
                <div className="cursor-pointer hover:text-[#1C62CD] font-semibold hover:transition-all flex items-center gap-2">Новинки</div>
                <div className="cursor-pointer hover:text-[#1C62CD] font-semibold hover:transition-all flex items-center gap-2"><FaFire />Товары по акции</div>
                <div className="cursor-pointer hover:text-[#1C62CD] font-semibold hover:transition-all flex items-center gap-2">Мужские</div>
                <div className="cursor-pointer hover:text-[#1C62CD] font-semibold hover:transition-all flex items-center gap-2">Женские</div>
                <div className="cursor-pointer hover:text-[#1C62CD] font-semibold hover:transition-all flex items-center gap-2">Деткские</div>
                <div className="cursor-pointer hover:text-[#1C62CD] font-semibold hover:transition-all flex items-center gap-2"><CgAppleWatch />Аксессуары</div>
                <div className="cursor-pointer hover:text-[#1C62CD] font-semibold hover:transition-all flex items-center gap-2"><MdOutlineDesktopWindows />Электроника</div>
            </div>
        </div>
    )
}