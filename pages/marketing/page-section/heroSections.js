import React from "react";
import Layout from "../../../src/layout";
import FirstExample from "../../../src/views/Home/components/MarketingSection/hero/firstExample";

import { HomeIcon } from "@heroicons/react/solid";

const pages = [
  { name: "Marketing", href: "#", current: false },
  { name: "Page Sections", href: "#", current: true },
];

export default function HeroSections() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 lg:px-24">
        <nav className="flex" aria-label="Breadcrumb">
          <ol role="list" className="flex items-center space-x-4">
            <li>
              <div>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <HomeIcon
                    className="flex-shrink-0 h-5 w-5"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Home</span>
                </a>
              </div>
            </li>
            {pages.map((page) => (
              <li key={page.name}>
                <div className="flex items-center">
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-gray-300"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                  </svg>
                  <a
                    href={page.href}
                    className="ml-4 text-sm text-slate-500 hover:text-slate-600 font-semibold"
                    aria-current={page.current ? "page" : undefined}
                  >
                    {page.name}
                  </a>
                </div>
              </li>
            ))}
          </ol>
        </nav>
        <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900">
          Hero Sections
        </h1>
        <FirstExample />
      </div>
    </Layout>
  );
}
