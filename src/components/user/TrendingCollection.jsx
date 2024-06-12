"use client";

import React, { useState } from "react";
import StylishHeader from "./StylishHeader";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const items = [
  "https://images.pexels.com/photos/13094233/pexels-photo-13094233.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/4053188/pexels-photo-4053188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/716107/pexels-photo-716107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1666067/pexels-photo-1666067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1214212/pexels-photo-1214212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

const TrendingCollection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToIndex = (index) => {
    setCurrentIndex(index);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="px-[5%] py-16 bg-[#4E1B61] grid md:grid-cols-6 grid-cols-1">
      <div className="header md:col-span-1 flex justify-center items-center">
        <StylishHeader title="trending collection" />
      </div>
      <div className="relative w-full overflow-hidden md:col-span-5">
        <Carousel
          opts={{
            align: "start",
          }}
          className="md:w-[92%] w-full mx-auto"
        >
          <CarouselContent className="p-3">
            {items.map((item, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3 mr-14"
              >
                <div className="w-64 h-72">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center">
                      <img src={item} className="object-cover h-full w-full rounded-xl" alt="" />
                    </CardContent>
                  </Card>
                  <p className="text-[#CDF520] text-center mt-2">Item</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="top-5 !text-[#CDF520] border-2 border-[#CDF520]" />
          <CarouselNext className="top-5 !text-[#CDF520] border-2 border-[#CDF520]" />
        </Carousel>
      </div>
    </section>
  );
};

export default TrendingCollection;
