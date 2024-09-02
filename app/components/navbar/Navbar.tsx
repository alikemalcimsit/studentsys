"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {useCollection} from "react-firebase-hooks/firestore"
import {
  LuHome,
  LuCalendarDays,
  LuAreaChart,
  LuTrophy,
  LuTimer,
} from "react-icons/lu";
import love from "../../assets/love.png";
import firebase from "firebase/compat/app";
type Props = {};

const Navbar = (props: Props) => {
  const [selectedItem, setSelectedItem] = useState<string | null>("anasayfa");
 
  return (
    <div className="bg-[#0F0F0F] fixed w-2/12  h-screen py-12">
      <div
        className="flex items,
        justify-center"
      >
        <Image alt="logo" src={love} height={100} width={100}></Image>
      </div>

      <div className="text-white w-9/12 m-auto text-xl mb-12">
        Merhaba Ali Kemal
      </div>

      <div className="w-9/12 m-auto space-y-8">
        {/* nav itemleri */}

        <Link
          href="/"
          onClick={() => setSelectedItem("anasayfa")}
          className={`flex items-center px-2 py-3 rounded-xl gap-x-2 justify-start cursor-pointer ${
            selectedItem === "anasayfa"
              ? "text-white bg-[#FF6D7A]"
              : "text-gray-400"
          }`}
        >
          <LuHome size={25} />
          <p className="text-lg">Anasayfa</p>
        </Link>
        <Link
          href="/planner"
          onClick={() => setSelectedItem("planlayici")}
          className={`flex items-center  px-2 py-3 rounded-xl gap-x-2 justify-start cursor-pointer ${
            selectedItem === "planlayici"
              ? "text-white bg-[#FFC13C]"
              : "text-gray-400"
          }`}
        >
          <LuCalendarDays size={25} />
          <p className="text-lg">Planlayıcı</p>
        </Link>
        <Link
          href="/lessonmeter"
          onClick={() => setSelectedItem("konumetre")}
          className={`flex items-center  px-2 py-3 rounded-xl gap-x-2 justify-start cursor-pointer ${
            selectedItem === "konumetre"
              ? "text-white bg-[#00C399]"
              : "text-gray-400"
          }`}
        >
          <LuAreaChart size={25} />
          <p className="text-lg">Konumetre</p>
        </Link>
        <Link
          href="/try"
          onClick={() => setSelectedItem("deneme")}
          className={`flex items-center   px-2 py-3 rounded-xl gap-x-2 justify-start cursor-pointer ${
            selectedItem === "deneme"
              ? "text-white bg-blue-600"
              : "text-gray-400"
          }`}
        >
          <LuTrophy size={25} />
          <p className="text-lg">Deneme Analizi</p>
        </Link>
        <Link
          href="/timer"
          onClick={() => setSelectedItem("zamanlayici")}
          className={`flex items-center  px-2 py-3 rounded-xl gap-x-2 justify-start cursor-pointer ${
            selectedItem === "zamanlayici"
              ? "text-white bg-[#8226FD]"
              : "text-gray-400"
          }`}
        >
          <LuTimer size={25} />
          <p className="text-lg">Zamanlayıcı</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
