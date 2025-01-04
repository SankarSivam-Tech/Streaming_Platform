import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Menu, Search } from "lucide-react";
import { LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import { useContentStore } from "../store/content";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { user, logout } = useAuthStore();

  const { contentType, setContentType } = useContentStore();

  console.log("contentType:", contentType);
  

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <article className=" max-w-6xl mx-auto flex flex-wrap justify-between items-center  p-4 h-20 ">
      <section className="flex items-center gap-10 z-50">
        <Link to="/">
          <img src={assets.Logo} alt="" className="w-32 sm:w-40" />
        </Link>

        {/* desktop navbar items */}

        <div className="hidden sm:flex gap-2 items-center">
          <Link to="/" className="hover:underline" onClick={()=>setContentType("movie")}>
            Movies
          </Link>

          <Link to="/" className="hover:underline" onClick={()=>setContentType("tv")}>
            TV Shows
          </Link>

          <Link to="/history" className="hover:underline">
            Search History
          </Link>
        </div>
      </section>

      <section className="flex gap-2 items-center z-50">
        <Link to="/search">
          <Search className="size-6 cursor-pointer" />
        </Link>

        <img
          src={user.image}
          alt="Avatar"
          className="h-8 rounded cursor-pointer"
        />

        <LogOut className="size-6 cursor-pointer" onClick={logout} />

        <div className="sm:hidden">
          <Menu className="size-6 cursor-pointer" onClick={toggleMobileMenu} />
        </div>
      </section>

      {/* mobile Navbar */}

      {isMobileMenuOpen && (
        <section className="sm:hidden w-full  mt-4 z-50 bg-black border rounded border-gray-800 ">
          <Link
            to="/"
            onClick={toggleMobileMenu}
            className="block hover:underline p-2"
          >
            Movies
          </Link>

          <Link
            to="/"
            onClick={toggleMobileMenu}
            className="block hover:underline p-2"
          >
            TV Shows
          </Link>

          <Link
            to="/history"
            onClick={toggleMobileMenu}
            className="block hover:underline p-2"
          >
            Search History
          </Link>
        </section>
      )}
    </article>
  );
};

export default Navbar;
