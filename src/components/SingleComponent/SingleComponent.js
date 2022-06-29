import React, { useRef, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

const data = [{ title: "Preview" }, { title: "Code" }];

export default function SingleComponent({ cardInfo }) {
  const { variant } = cardInfo;
  const [active, setActive] = useState("Preview");
  const [copied, setCopied] = useState(false);
  const textRef = useRef();
  console.log(cardInfo);

  setTimeout(() => {
    copied && setCopied(false);
  }, 1000);

  const codeString = `
    // This example requires Tailwind CSS v16.0+ 
    <template>
      <div class="rounded-md bg-yellow-50 p-4">
        <div class="flex">
          <div class="flex-shrink-0">
            <ExclamationIcon class="h-5 w-5 text-yellow-400" aria-hidden="true" />
          </div>
          <div class="ml-3">
            <h3 class="text-sm font-medium text-yellow-800">Attention needed</h3>
            <div class="mt-2 text-sm text-yellow-700">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum. ami</p>
            </div>
          </div>
        </div>
      </div>
    </template>

    <script setup>
    import { ExclamationIcon } from '@heroicons/vue/solid'
    </script>
    `;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 lg:px-24">
      <div className="flex justify-between mt-12 items-center ">
        <p className="text-slate-900 font-medium">
          {variant} //
          <span className="bg-slate-100 text-slate-700 text-xs rounded-md ml-2 font-semibold hidden sm:inline-block px-2 py-1">
            Requires JS //
          </span>
        </p>

        <div className="flex gap-x-6 items-center">
          <nav className="flex border rounded-lg  bg-slate-100 text-sm cursor-pointer">
            {data.map((sData, index) => (
              <span
                key={index}
                className={`${
                  active === sData.title &&
                  ` bg-white text-slate-900  rounded-lg`
                } p-2 text-slate-600 font-semibold
              `}
                onClick={() => setActive(sData.title)}
              >
                {sData.title}
              </span>
            ))}
          </nav>

          <div>
            <select
              id="location"
              name="location"
              className="block w-20 pl-3 py-2 border-gray-300 focus:outline-none focus:ring-indigo-500 sm:text-sm rounded-md focus:border-2 focus:border-blue-500 text-slate-900 font-medium text-sm"
            >
              <option>HTML</option>
              <option>React</option>
              <option>Vue</option>
            </select>
          </div>
          {copied && <small>Copied!</small>}
          <CopyToClipboard text={codeString}>
            <button
              className="pl-8 py-1 border-l-2"
              onCopy={() => setCopy(true)}
              onClick={() => setCopied(true)}
            >
              <img src="/clipboard.svg" className="w-4 h-4" />
            </button>
          </CopyToClipboard>
        </div>
      </div>
      <div className="codepreview">
        {/* Preview */}
        <div>
          {active === "Preview" && (
            <div className="text-center mt-12 ">
              <img className="border rounded-xl" src="/img/preview.png" />
            </div>
          )}
        </div>
        {/* Code */}
        <div>
          {active === "Code" && (
            <div className=" mt-12  " id="copyCode" ref={textRef}>
              <SyntaxHighlighter
                language="javascript"
                style={a11yDark}
                className="min-h-min"
              >
                {codeString}
              </SyntaxHighlighter>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
