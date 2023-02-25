import React from "react";
import CampaignsCard from "./CampaignsCard";

export default function Campaigns() {
     return (
          <section className="bg-stone-50">
               <div className="container py-6">
                    <h6 className="mb-2 hidden text-[14px] font-semibold md:block">
                         Kategoriler
                    </h6>

                    <div className="rounded bg-indigo-500 bg-[url('https://cdn.getir.com/getirweb-images/common/illustration/doodle.png')] bg-cover bg-center bg-no-repeat">
                         <div className="flex w-full items-center justify-between">
                              <div className="h-full py-6 px-6 lg:py-0 lg:px-10 xl:px-16 2xl:px-20">
                                   <h2 className="text-2xl font-semibold text-white">
                                        Getir'i indirin!
                                   </h2>
                                   <p className="mt-3 font-semibold text-white">
                                        İstediğiniz ürünleri dakikalar içinde
                                        kapınıza getirelim.
                                   </p>
                                   <div className="mt-8 flex w-fit items-center justify-center gap-2">
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
                              <div className="hidden pt-8 md:block">
                                   <figure>
                                        <img
                                             src="https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png"
                                             alt=""
                                             className="h-auto max-w-full object-cover"
                                        />
                                   </figure>
                              </div>
                         </div>
                    </div>

                    <div className="mt-4 grid gap-4 md:mt-10 md:grid-cols-3">
                         <CampaignsCard
                              img="https://getir.com/_next/static/images/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg"
                              title="Her siparişinize bir kampanya"
                              description="Getir’de vereceğiniz her siparişe uygun bir kampanya bulabilirsiniz."
                         />
                         <CampaignsCard
                              img="https://getir.com/_next/static/images/intro-market-courier-34cd8b0ca1d547580d506566edfacf8d.svg"
                              title="Dakikalar içinde kapınızda"
                              description="Getir’le siparişiniz dakikalar içinde kapınıza gelir."
                         />
                         <CampaignsCard
                              img="https://getir.com/_next/static/images/intro-discount-6248544cb695830a2e25debd3c0f3d29.svg"
                              title="Binlerce çeşit mutluluk"
                              description="Getir’de binlerce çeşit arasından seçiminizi yapabilirsiniz."
                         />
                    </div>
               </div>
          </section>
     );
}
