"use client";
import Link from "next/link";
import { Input } from "../ui/input";
import { HeartIcon, ShoppingCartIcon, User2Icon } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { logout } from "@/redux/slices/authSlice";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const UserNavbar = () => {
  const [lastScroll, setLastScroll] = useState(0);
  const [isAuth, setIsAuth] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = Math.floor(window.scrollY);
      setLastScroll(scrollHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuth") === "true";
    setIsAuth(authStatus);
  }, []);

  const handleLogout = () => {
    logout();
    setIsAuth(false);
    router.push("/");
  };

  return (
    <header className="shadow-[0_0_5px_rgba(78,27,97,0.50)] sticky top-0 z-50">
      <nav>
        <div
          className={
            (lastScroll > 104
              ? "py-2 bg-[#ffffff8b] backdrop-blur"
              : "py-5 bg-white") +
            ` px-[5%] lower text-[#4E1B61] flex items-center justify-between transition-all ease-in-out duration-200`
          }
        >
          <div className="logo font-semibold transition-all ease-in-out duration-200 w-52">
            <Link href="/">
              <img src="/assets/website_logo.png" alt="" />
            </Link>
          </div>
          <div className="right flex items-center justify-center">
            <div className="search">
              <form>
                <Input
                  className=" w-80 rounded-full placeholder:text-[#4e1b6191] bg-transparent"
                  placeholder="Search"
                />
              </form>
            </div>
            <ul className=" flex items-center justify-center">
              <li
                className={
                  (lastScroll > 104 ? " bg-[#4E1B61] text-white" : "") +
                  ` ml-3 border flex justify-center items-center rounded-full border-[#4E1B61] duration-150 ease-in-out transition-all`
                }
              >
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger className=" h-10 w-10 grid place-items-center">
                      <Link href="/" className=" p-2.5">
                        <HeartIcon className=" w-5 h-5" />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent className=" bg-white">
                      <p>Wishlist</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </li>
              <li
                className={
                  (lastScroll > 104 ? " bg-[#4E1B61] text-white" : "") +
                  ` ml-3 border flex justify-center items-center rounded-full border-[#4E1B61] duration-150 ease-in-out transition-all`
                }
              >
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger className=" h-10 w-10 grid place-items-center">
                      <Link href="/cart" className=" p-2.5">
                        <ShoppingCartIcon className=" w-5 h-5" />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent className=" bg-white">
                      <p>Cart</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </li>
              <li className={` ml-3 flex justify-center items-center`}>
                {isAuth ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger
                      className={
                        (lastScroll > 104 ? " bg-[#4E1B61] text-white" : "") +
                        " w-10 h-10 grid place-items-center border border-[#4E1B61] rounded-full outline-none duration-150 ease-in-out transition-all"
                      }
                    >
                      <User2Icon className=" w-5 h-5" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className=" bg-white">
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={handleLogout}>
                        Logout
                      </DropdownMenuItem>
                      {/* <DropdownMenuItem>
                        <Link href="/vendor">Login as Vendor</Link>
                      </DropdownMenuItem> */}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    href="/auth"
                    className={(lastScroll > 104 ? " bg-[#4E1B61] text-white" : "") +" border border-[#4E1B61] px-5 py-2 rounded"}
                  >
                    Login
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default UserNavbar;
