"use client";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Header from "./Header";
import { useGetProductCategoryQuery } from "@/redux/slices/ProductCategorySlice";
import { useRouter } from "next/navigation";

export function CarouselSize({ title }) {
  const router = useRouter();
  const { data: categoryData, error, isLoading } = useGetProductCategoryQuery();

  const handleCategoryClick = (categoryName, categoryId) => {
    
    router.push(`/${categoryId}`);
  };

  return (
    <section className="px-[5%] py-16">
      <Header title={title} />
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-[92%] mx-auto"
      >
        <CarouselPrevious className=" border-2 border-black text-black top-20" />
        
        <CarouselContent className="p-3">
          {categoryData?.data?.map((category) => (
            <CarouselItem
              key={category._id}
              className="md:basis-1/2 lg:basis-1/3 hover:scale-105 ease-in-out transition-all duration-150 max-w-40"
            >
              <div
                className=" cursor-pointer"
                onClick={() => handleCategoryClick(category.categoryName, category._id)}
              >
                <Card
                  className="relative hover:before:absolute hover:before:w-full 
                hover:before:h-full hover:before:left-0 hover:before:top-0 hover:before:z-10 hover:before:bg-[#ffffff30] before:ease-in-out before:duration-150 before:transition-all w-full h-full p-0 m-0"
                >
                  <CardContent className="flex aspect-square items-center justify-center p-0">
                    <img
                      src="https://via.placeholder.com/150"
                      alt={category.categoryName}
                      className="object-cover rounded-xl w-full h-full outline-2 outline-offset-4 outline outline-[#4E1B61]"
                    />
                  </CardContent>
                </Card>
                <p className="text-center mt-2 font-medium">
                  {category.categoryName}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselNext className=" border-2 border-black text-black top-20" />
      </Carousel>
    </section>
  );
}
