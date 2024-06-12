"use client";

import React, { useState } from "react";
import StylishHeader from "./StylishHeader";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";

const items = [
  {
    src: "https://images.pexels.com/photos/904117/pexels-photo-904117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    gender: "Women",
  },
  {
    src: "https://images.pexels.com/photos/1619801/pexels-photo-1619801.jpeg",
    gender: "Children",
  },
  {
    src: "https://images.pexels.com/photos/1321943/pexels-photo-1321943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    gender: "Men",
  },
];

const Style = () => {
  return (
    <section className=" px-[5%] py-16 bg-[#4E1B61] grid md:grid-cols-4">
      <div className="header col-span-1 flex justify-center items-center">
        <StylishHeader title="Discover your fashion" className=" w-[70%]" />
      </div>
      <div className="relative w-full col-span-3 flex">
        {items.map((item, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden text-2xl font-medium text-center relative before:w-full before:h-full before:absolute before:bg-[#ffffff25] before:transition-all before:ease-in-out before:duration-150 hover:before:bg-[#00000024] w-80 h-96 flex-shrink-0 flex justify-center items-center mx-2 cursor-pointer"
            style={{ borderRadius: "10px" }}
          >
            <Card onClick={()=>{
              useRouter().push("/")
            }} className="h-full w-full cursor-pointer">
              <CardContent className="flex aspect-square items-center justify-center w-full h-full">
                <img src={item.src} className=" w-full h-full" alt="" />
                <span className="absolute text-[#fff]">{item.gender}</span>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Style;
