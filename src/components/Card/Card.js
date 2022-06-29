import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
export default function Card({ cardData }) {
  console.log("test", cardData);

  const router = useRouter();

  return (
    <Link href={{ pathname: cardData.href, query: cardData }}>
      <div
        className="border border-gray rounded-lg flex flex-col cursor-pointer"
        // onClick={() => router.push("/marketing/section/page")}
      >
        <div
          //   key={i}
          className="text-center bg-gray-100 h-32 rounded-t-lg"
        >
          <img
            // src="/img/Home/Marketing/Page/HeroBackground/HeroBG.png"
            src={cardData.img}
            alt="hyaroo"
            className="rounded-md"
            priority="true"
          />
        </div>
        <div className="px-4 py-4 bg-white rounded-b-lg">
          <p className="mb-1 text-gray-900 text-sm font-semibold">
            {cardData.cardname}
          </p>
          <p className="text-gray-500 text-xs font-medium">
            {cardData.totalComponent} components
          </p>
        </div>
      </div>
    </Link>
  );
}
