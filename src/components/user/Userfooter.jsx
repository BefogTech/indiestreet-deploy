import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const UserFooter= () => {
  return (
    <footer className="bg-[#4E1B61] text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-24 gap-6 px-4 py-10">
        <div>
          <h2 className="text-xl font-semibold mb-2.5">Indiestreet</h2>
          <p className="text-sm text-[#ddd]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, facilis
            eum inventore ea nisi mollitia corrupti provident recusandae quiddd
            perspiciatis doloribus distinctio aut.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2.5">Categories</h2>
          <ul className="text-sm text-[#ddd]">
            <li className=" mb-2.5">
              <Link
                href="/"
                className="hover:text-[#CDF520] duration-150 ease-in-out transition-all"
              >
                Category 1
              </Link>
            </li>
            <li className=" mb-2.5">
              <Link
                href="/"
                className="hover:text-[#CDF520] duration-150 ease-in-out transition-all"
              >
                Category 2
              </Link>
            </li>
            <li className=" mb-2.5">
              <Link
                href="/"
                className="hover:text-[#CDF520] duration-150 ease-in-out transition-all"
              >
                Category 3
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2.5">Privacy and Policy</h2>
          <ul className="text-sm text-[#ddd]">
            <li className=" mb-2.5">
              <Link
                href="/"
                className="hover:text-[#CDF520] duration-150 ease-in-out transition-all"
              >
                Help
              </Link>
            </li>
            <li className=" mb-2.5">
              <Link
                href="/"
                className="hover:text-[#CDF520] duration-150 ease-in-out transition-all"
              >
                Terms and Conditions
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2.5">Follow Us On</h2>
          <div className="flex space-x-4 text-2xl text-[#ddd]">
            <a href="https://www.facebook.com/" target="_blank" className=" hover:text-[#CDF520] transition-all ease-in-out duration-150">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/" target="_blank" className=" hover:text-[#CDF520] transition-all ease-in-out duration-150">
              <FaInstagram />
            </a>
            <a href="https://twitter.com/" target="_blank" className=" hover:text-[#CDF520] transition-all ease-in-out duration-150">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 bg-white text-black py-5">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Indiestreet. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default UserFooter;
