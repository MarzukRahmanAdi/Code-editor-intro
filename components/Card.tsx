import React from "react";
import NextLink from 'next/link'

function Card({title, desc, imgLink, souceLink, btnText, cardclass}:any) {
  return (
    <div>
      <div className={` card w-52 shadow-xl text-white ${cardclass}`}>
        <figure className="px-10 pt-10">
          <img
            src={imgLink}
            alt={title}
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>{desc}</p>
          <div className="card-actions">
            <NextLink target={"_blank"} href={souceLink}>
            <button className={"btn border-white flex items-center text-white text-md hover:bg-white/50 hover:border-white card-btn"}>{btnText ? btnText : "Start"} 
            &ensp; <span class="material-symbols-outlined text-sm">
logout
</span>
            </button>

            </NextLink>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

