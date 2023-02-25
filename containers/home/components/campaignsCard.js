import React from "react";

export default function CampaignsCard({ img, title, description }) {
     return (
          <div className="flex flex-col items-center justify-start rounded bg-white px-4 pt-16 pb-10 shadow">
               <picture>
                    <img
                         src={img}
                         alt={title}
                         className="h-auto max-w-full object-cover"
                    />
               </picture>
               <span className="mt-6 text-center text-lg font-semibold text-indigo-400">
                    {title}
               </span>
               <p className="mt-2 text-center text-stone-700">{description}</p>
          </div>
     );
}
