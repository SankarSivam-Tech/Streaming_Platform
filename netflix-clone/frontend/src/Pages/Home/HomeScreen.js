import React from "react";
import Navbar from "../../Components/Navbar";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { Info, Play } from "lucide-react";

const HomeScreen = () => {
  return (
    <main className=" h-screen relative text-white">
      <Navbar />

      <img
        src={assets.extraction}
        alt="hero_img"
        className="absolute top-0 left-0 w-full h-full object-cover -z-50"
      />

      <div
        className="absolute top-0 left-0 w-full h-full bg-black/50 -z-50 "
        aria-hidden="true"
      />
      <section className="absolute top-0 left-0 w-full h-full flex flex-col justify-center px-8 md:px-16 lg:px-32">
        <div className="bg-gradient-to-b from-black via-transparent to-transparent absolute w-full h-full top-0 left-0 -z-10" />

        <div className="max-w-2xl">
          <h1 className="font-extrabold text-6xl mt-4 text-balance">
            Extraction
          </h1>

          <p
            className="mt-2 text-lg
              "
          >
            2014 | 18+
          </p>

          <p className="mt-4 text-lg">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </div>

        <div className="flex mt-8">
          <Link
            to="/Watch/123"
            className="flex items-center bg-white hover:bg-white/80 text-black font-bold px-4 py-2 rounded mr-4"
          >
            <Play className="size-6 mr-2 fill-black" />
            Play
          </Link>

          <Link
            to="/Watch/123"
            className="bg-gray-500/70 hover:bg-gray-500 text-white py-2 px-4 rounded flex items-center"
          >
            <Info className="size-6 mr-2" />
            More Info
          </Link>
        </div>
      </section>
    </main>
  );
};

export default HomeScreen;
