import React, { useState } from "react";
import Logo from "../../assets/netflix-logo.png";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import TV from "../../assets/tv.png";
import Video_source from "../../assets/hero-vid.m4v";
import stranger_lg from "../../assets/stranger-things-lg.png";
import stranger_sm from "../../assets/stranger-things-sm.png";
import download_icon from "../../assets/download-icon.gif";
import device_pile from "../../assets/device-pile.png";
import Video_device from "../../assets/video-devices.m4v";
import Kids_img from "../../assets/kids.png";

const AuthScreen = () => {
  const [email, setEmail] = useState("");
  return (
    <main className="w-full hero-bg relative">
      {/* Navbar */}

      <header className="max-w-6xl mx-auto flex justify-between items-center p-4 pb-10 ">
        <img src={Logo} alt="logo" className="w-32 md:w-52" />

        <Link to={"/login"} className="text-white bg-red-600 px-2 py-1 rounded">
          Sign in
        </Link>
      </header>

      {/* hero section */}

      <article className="max-w-6xl mx-auto flex flex-col items-center justify-center text-center py-40 text-white  ">
        <h1 className="text-4xl md:text-6xl font-bold  mb-4">
          Unlimited movies, TV shows, and more
        </h1>

        <p className="text-lg mb-4 ">Watch anywhers,Cancel anytime</p>

        <p className="mb-4 ">
          Ready to watch?Enter your Email to create or restart your membership
        </p>

        <form className="w-1/2 flex flex-col md:flex-row gap-4">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 rounded flex-1 bg-black/80 border border-gray-700"
          />

          <button className="bg-red-600 text-xl lg:text-2xl px-2 lg:px-6 py-1 md:py-2 rounded flex justify-center items-center">
            Get Started
            <ChevronRight className="size:8 md:size-10" />
          </button>
        </form>
      </article>

      {/* separator */}

      <div className="w-full h-2 bg-[#232323]" aria-hidden="true" />

      {/* 1st section */}

      <article className="bg-black py-10 text-white">
        <section className="flex flex-col md:flex-row items-center justify-center mx-auto max-w-6xl px-4 md:px-2">
          {/* left side */}

          <div className="flex-1 text-center md:text-left ">
            <h1 className="font-extrabold text-4xl md:text-5xl mb-4 ">
              Enjoy on your TV
            </h1>

            <p className="text-lg md:text-xl">
              Watch on Smart TVs, PlayStation,Xbox,Chromecast,Apple TV,Blu-ray
              Players,and more.
            </p>
          </div>

          {/* right side */}

          <div className="flex-1 relative">
            <img src={TV} alt="Tv img" className="mt-4 z-20 relative" />

            <video
              className="absolute top-1/2 left-1/2 h-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
              playsInline
              autoPlay={true}
              muted
              Loop
            >
              <source src={Video_source} type="video/mp4" />
            </video>
          </div>
        </section>
      </article>

      {/* separator */}

      <div className="w-full h-2 bg-[#232323]" aria-hidden="true" />

      {/* 2nd section */}

      <article className="bg-black py-10 text-white">
        <section className="flex flex-col-reverse md:flex-row items-center justify-center max-w-6xl mx-auto px-4 md:px-2">
          {/* left side */}

          <div className="flex-1 relative">
            <img src={stranger_lg} alt="" className="mt-4" />

            <div className=" flex items-center absolute bottom-5 left-1/2 -translate-x-1/2 bg-black border border-slate-500 rounded-md px-2 w-3/4 lg:w-1/2 h-24 gap-2 ">
              <img src={stranger_sm} alt="" className="h-full" />

              <div className="flex justify-between items-center w-full">
                <div className="flex flex-col gap-0">
                  <span className="text-md lg:text-lg">Stranger Things</span>

                  <span className="text-sm text-blue-500">Downloading...</span>
                </div>

                <img src={download_icon} alt="" className="h-12" />
              </div>
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-balance">
              Download your shows to watch offline
            </h1>

            <p className="text-lg md:text-xl">
              Save your favorites easily and always have something to watch.
            </p>
          </div>
        </section>
      </article>

      {/* separator */}

      <div className="w-full h-2 bg-[#232323]" aria-hidden="true" />

      {/* 3rd section */}

      <article className="bg-black py-10 text-white">
        <section className="flex flex-col md:flex-row items-center justify-center px-4 md:px-2 max-w-6xl mx-auto">
          {/* left side */}

          <div className="flex-1 text-center md:text-left">
            <h1 className="font-extrabold text-4xl md:text-5xl mb-4">
              Watch eveywhere
            </h1>

            <p className="text-lg md:text-xl">
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </p>
          </div>

          {/* right side */}

          <div className="flex-1 relative overflow-hidden">
            <img src={device_pile} alt="" className="mt-4 z-20 relative" />

            <video
              playsInline
              muted
              Loop
              autoPlay={true}
              className="absolute top-2 left-1/2 -translate-x-1/2 h-4/6 z-10 max-w-[63%]"
            >
              <source src={Video_device} type="video/mp4" />
            </video>
          </div>
        </section>
      </article>

      {/* separator */}

      <div className="w-full h-2 bg-[#232323]" aria-hidden="true" />

      {/* 4th section */}

      <article className="bg-black py-10 text-white">
        <section className="flex flex-col-reverse md:flex-row items-center justify-center max-w-6xl mx-auto px-4 md:px-2">
          {/* left side */}

          <div className="flex-1">
            <img src={Kids_img} alt="" className="mt-4" />
          </div>

          {/* right side */}

          <div className="flex-1 text-center md:text-left">
            <h1 className="font-extrabold text-4xl md:text-5xl mb-4">
              Create profiles for kids
            </h1>

            <p className="text-lg md:text-xl">
              Send kids on adventures with their favorite characters in a space
              made just for them—free with your membership.
            </p>
          </div>
        </section>
      </article>
    </main>
  );
};

export default AuthScreen;
