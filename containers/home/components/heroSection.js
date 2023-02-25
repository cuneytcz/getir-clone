"use client";

import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import { HiLocationMarker, HiOutlineChevronRight } from "react-icons/hi";

export default function HeroSection() {
     const [selected, setSelected] = useState("TR");

     const phones = {
          US: "+01",
          DE: "+50",
          TR: "+90",
     };

     return (
          <>
               <section className="relative w-full md:h-[500px] md:overflow-hidden md:bg-gradient-to-r md:from-indigo-500 md:to-transparent">
                    <div className="flex items-center justify-between bg-stone-50 p-4 md:hidden">
                         <div className="flex items-center gap-1.5">
                              <HiLocationMarker className="h-5 w-5 fill-indigo-500" />
                              <span className="text-[14px] font-semibold">
                                   Teslimat Adresi Belirle
                              </span>
                         </div>
                         <HiOutlineChevronRight className="h-5 w-5" />
                    </div>
                    <figure className="inset-0 -z-10 hidden h-full w-full md:absolute md:block">
                         <img
                              src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg"
                              alt=""
                              className="h-full w-full object-cover"
                         />
                    </figure>
                    <div className="container flex h-full w-full items-center justify-between">
                         {/* Left Column */}
                         <div className="hidden md:block">
                              <figure>
                                   <img
                                        src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"
                                        alt="Getir bi mutluluk"
                                        className="h-auto max-w-full object-cover"
                                   />
                              </figure>
                              <h1 className="mt-10 mb-1 w-80 text-4xl font-semibold text-white drop-shadow-sm">
                                   Dakikalar içinde kapınızda
                              </h1>
                         </div>

                         {/* Right Column */}
                         <div className="w-full rounded-xl bg-white p-6 md:w-[400px]">
                              <h5 className="mb-4 text-center font-semibold text-indigo-500">
                                   Giriş yap veya kayıt ol
                              </h5>

                              <div className="flex gap-2.5">
                                   <ReactFlagsSelect
                                        countries={Object.keys(phones)}
                                        customLabels={phones}
                                        onSelect={(code) => setSelected(code)}
                                        selected={selected}
                                        className="mb-4 [&>button]:h-12 [&>button]:border-stone-400 [&>button]:focus:outline-indigo-500"
                                   />
                                   <input
                                        type="text"
                                        placeholder="Telefon Numarası"
                                        className="h-12 w-full rounded border border-stone-400 px-2.5 py-1.5 outline-red-500"
                                   />
                              </div>

                              <button
                                   type="button"
                                   className=" flex h-12 w-full flex-nowrap items-center justify-center rounded-xl bg-yellow-400 px-4 text-sm font-semibold text-indigo-400 shadow-md transition-all hover:bg-indigo-400 hover:text-white">
                                   Telefon numarası ile devam et
                              </button>
                         </div>
                    </div>
               </section>
          </>
     );
}
