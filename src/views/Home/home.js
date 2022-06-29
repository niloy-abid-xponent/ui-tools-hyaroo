import React, { useState } from "react";
import Head from "next/head";

import { MarketingSection } from "./components";
import { marketingDatas } from "./Data";

export default function Home() {
  return (
    <>
      <Head>
        <title>Web Technology Company | Hyaroo</title>
        <meta
          name="description"
          content="XPONENT offers a wide range of web technology services to clients all over the world."
        />
      </Head>

      {/* <div className=" max-w-7xl mx-auto px-4 sm:px-6 py-3 lg:px-24 flex items-center gap-4 md:gap-10 lg:gap-16 text-sm font-semibold text-gray-900">
        <h3>Marketing</h3>
        <h3>Application UI</h3>
        <h3 className="">
          E Commerce{" "}
          <span className="bg-cyan-50 text-cyan-700 rounded-md ml-2 font-semibold hidden sm:inline-block  py-2 px-4">
            New
          </span>
        </h3>
      </div> */}
      <div className="bg-gray-50 py-5">
        <MarketingSection id="marketing" marketingDatas={marketingDatas} />
        <MarketingSection id="marketing" marketingDatas={marketingDatas} />
        <MarketingSection id="marketing" marketingDatas={marketingDatas} />
      </div>
    </>
  );
}
