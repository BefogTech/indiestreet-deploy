import Link from "next/link";
import Header from "./Header";
import {
  Card,
  CardContent,
} from "@/components/ui/card";


const ProductDisplay = ({ title, url }) => {
  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"];

  return (
    <section className=" px-[5%] py-16">
      <div className="header flex items-center justify-between">
        <Header title={title} />
        <Link
          href={url}
          className="border border-[#4E1B61] text-[#4E1B61] hover:bg-[#4E1B61] hover:text-[#CDF520] transition-all ease-in-out duration-200 font-medium px-5 py-2 rounded mb-8"
        >
          View More
        </Link>
      </div>
      <div className="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-2">
        {items.map((item, index) => (
          <div
            key={index}
            className=" w-full h-60 flex-shrink-0 flex justify-center items-center"
          >
            <Card className="h-full w-full">
              <CardContent className="flex aspect-square items-center justify-center w-full h-full">
                <div
                  className="bg-gray-200 rounded-lg p-4 w-full h-full"
                  style={{ borderRadius: "10px" }}
                >
                  {item}
                </div>
              </CardContent>
            </Card>
            {/* <div
              className="bg-gray-200 rounded-lg p-4 w-full h-full"
              style={{ borderRadius: "10px" }}
            >
              {item}
            </div> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductDisplay;
