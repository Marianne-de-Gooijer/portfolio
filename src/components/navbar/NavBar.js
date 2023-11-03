import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

import logo from "../../../public/images/logo.png";

function NavLink({ href, title, className = "" }) {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-black absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
}

function NavBar() {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  function handleNav() {
    setNav(!nav);
  }

  useEffect(() => {
    function handleShadow() {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
      window.addEventListener('scroll', handleShadow);
    }
  },[])

  return (
    <header className={shadow ? "fixed w-full h-20 shadow-xl z-[100] font-medium bg-light" : "fixed w-full h-20 z-[100] font-medium bg-light"}>
      <div className="max-w-screen-2xl m-auto flex justify-between items-center w-full h-full px-10 2xl:px-16">
        <Link href="/">
          <Image src={logo} alt="/" className="w-[65px] h-auto" />
        </Link>
        <nav>
          <ul className="hidden md:flex">
            <li>
              <NavLink href="/" title="Home" className="mr-4" />
            </li>
            <li>
              <NavLink href="/#overMij" title="Over mij" className="mr-4" />
            </li>
            <li>
              <NavLink href="/#skills" title="Skills" className="mr-4" />
            </li>
            <li>
              <NavLink href="/#projecten" title="Projecten" className="mr-4" />
            </li>
            <li>
              <NavLink href="/#contact" title="Contact" />
            </li>
          </ul>
          <div onClick={handleNav} className="md:hidden cursor-pointer">
            <AiOutlineMenu size={25} />
          </div>
        </nav>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "md-hidden fixed left-0 top-0 w-full sm:w-[60%] md:w-[45%] h-screen bg-light p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between border-b border-gray-300 pb-8">
              <Image src={logo} alt="/" className="w-[65px] h-auto" />
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
          </div>
          <nav className="py-8 flex flex-col">
            <ul>
              <li className="py-4">
                <NavLink href="/" title="Home" />
              </li>
              <li className="py-4">
                <NavLink href="/#overMij" title="Over mij" />
              </li>
              <li className="py-4">
                <NavLink href="/#skills" title="Skills" />
              </li>
              <li className="py-4">
                <NavLink href="/#projecten" title="Projecten" />
              </li>
              <li className="py-4">
                <NavLink href="/#contact" title="Contact" />
              </li>
            </ul>
            <div className="pt-20">
              <p className="uppercase tracking-widest text-pink-600">Contact</p>
              <div className="flex items-center justify-between my-4 w-full">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <Link href="https://www.linkedin.com/in/marianne-de-gooijer/">
                    <FaLinkedinIn />
                  </Link>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <Link href="https://github.com/Marianne-de-Gooijer">
                    <FaGithub />
                  </Link>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <Link href="mailto: mariannedegooijer@gmail.com">
                    <AiOutlineMail />
                  </Link>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <Link href="tel: +31637338187">
                    <AiOutlinePhone />
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default NavBar;