import Link from "next/link";
import React from "react";
import Data from "./constants";

export default function Footer() {
     return (
          <footer>
               <div className="container">
                    <div className="flex flex-col gap-6 py-10 md:flex-row md:gap-0">
                         <div className="flex-1 pr-4">
                              <h6 className="mb-4 text-lg font-medium text-indigo-400">
                                   Getir'i indirin!
                              </h6>
                              <div className="flex flex-col gap-4">
                                   <figure>
                                        <img
                                             src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
                                             alt=""
                                             className="h-auto max-w-full object-cover"
                                        />
                                   </figure>
                                   <figure>
                                        <img
                                             src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
                                             alt=""
                                             className="h-auto max-w-full object-cover"
                                        />
                                   </figure>
                                   <figure>
                                        <img
                                             src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
                                             alt=""
                                             className="h-auto max-w-full object-cover"
                                        />
                                   </figure>
                              </div>
                         </div>

                         {Data.menu.map((item, idx) => (
                              <div key={idx} className="flex-1 pr-4">
                                   <h6 className="mb-4 text-lg font-medium text-indigo-400">
                                        {item.title}
                                   </h6>

                                   <ul className="flex flex-col gap-2">
                                        {item.items.map((i, idx) => (
                                             <li key={idx}>
                                                  <Link
                                                       href=""
                                                       className="text-stone-700">
                                                       {i.title}
                                                  </Link>
                                             </li>
                                        ))}
                                   </ul>
                              </div>
                         ))}

                         <div className="hidden max-w-fit xl:block">
                              <figure className="rounded bg-white p-4 shadow">
                                   <img
                                        src="https://cdn.getir.com/getirweb-images/common/etbis.png"
                                        alt=""
                                        className="h-20 max-w-full object-cover"
                                   />
                              </figure>
                         </div>
                    </div>
               </div>
          </footer>
     );
}
