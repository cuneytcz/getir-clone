"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Data from "../constant";

export default function Categories() {
     const [categories, setCategories] = useState([]);

     useEffect(() => {
          setCategories(Data.categories);
     }, []);

     return (
          <section>
               <div className="container py-6">
                    <h6 className="mb-2 text-[14px] font-semibold">
                         Kategoriler
                    </h6>

                    <div className="grid grid-cols-3 gap-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10">
                         {!categories.length && "Yükleniyor..."}
                         {categories &&
                              categories.map((category) => (
                                   <Link
                                        href=""
                                        key={category.id}
                                        className="flex min-h-[108.8px] flex-col items-center justify-center rounded hover:bg-indigo-50/10">
                                        <figure className="h-12 w-12 rounded border border-stone-200 bg-stone-50">
                                             <img
                                                  src={category.image}
                                                  alt=""
                                                  className="h-auto max-w-full object-cover"
                                             />
                                        </figure>
                                        <span className="mt-3 inline-block whitespace-nowrap text-sm font-semibold text-stone-700">
                                             {category.title}
                                        </span>
                                   </Link>
                              ))}
                    </div>
               </div>
          </section>
     );
}
