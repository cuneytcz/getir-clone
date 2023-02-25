"use client";

import React from "react";
import Link from "next/link";
import Data from "./constants";
import { usePathname } from "next/navigation";
import { FaGlobe, FaUserAlt, FaUserPlus } from "react-icons/fa";

export default function Header() {
     const pathname = usePathname();

     return (
          <>
               <header className="relative h-auto w-full bg-indigo-500">
                    <div className="container flex items-center justify-between pt-1">
                         {/* Left Column */}
                         <nav className="flex w-fit items-center justify-center gap-px">
                              {Data.navigation.map((item) => (
                                   <Link
                                        key={item.id}
                                        href={item.url}
                                        className={`flex items-center justify-center rounded-tr-md rounded-tl-md px-2 py-2.5 hover:bg-indigo-400 md:px-5 md:py-3 ${
                                             pathname == item.url
                                                  ? "bg-indigo-400"
                                                  : ""
                                        }`}>
                                        <img
                                             src={item.src}
                                             alt={item.name}
                                             className={`h-[14px] max-w-full object-cover md:h-4 ${
                                                  pathname == item.url
                                                       ? ""
                                                       : "brightness-[5%] contrast-150 hue-rotate-180 invert-[90%] saturate-[3333%] sepia-[2%]"
                                             }`}
                                        />
                                   </Link>
                              ))}
                         </nav>

                         {/* Right Column */}
                         <div className="hidden items-center justify-center gap-px md:flex">
                              <button
                                   type="button"
                                   className="flex items-center justify-center gap-2 px-5 py-3 text-sm text-white text-opacity-80">
                                   <FaGlobe className="h-4 w-4" />
                                   <span className="hidden lg:inline-block">
                                        Türkçe (TR)
                                   </span>
                              </button>

                              <button
                                   type="button"
                                   className="flex items-center justify-center gap-2 px-5 py-3 text-sm text-white text-opacity-80">
                                   <FaUserAlt className="h-4 w-4" />
                                   <span className="hidden lg:inline-block">
                                        Giriş Yap
                                   </span>
                              </button>

                              <button
                                   type="button"
                                   className="flex items-center justify-center gap-2 px-5 py-3 text-sm text-white text-opacity-80">
                                   <FaUserPlus className="h-5 w-5" />
                                   <span className="hidden lg:inline-block">
                                        Kayıt Ol
                                   </span>
                              </button>
                         </div>
                    </div>
               </header>
          </>
     );
}
