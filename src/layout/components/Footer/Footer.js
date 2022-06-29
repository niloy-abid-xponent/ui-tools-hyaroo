import Image from "next/image";
import Link from "next/link";

const navigation = {};

export default function Footer() {
  return (
    <footer
      className="bg-white my-12 border-t-[1px]"
      aria-labelledby="footer-heading "
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="flex flex-col justify-center items-center space-y-5 mt-12">
        <div>
          <Link href="/">
            <a className="flex items-center -ml-1.5">
              <span className="sr-only">Hyaroo</span>
              <Image
                src="/img/logo-alternate.svg"
                alt="hyaroo"
                className="h-8 w-auto sm:h-10"
                width={98}
                height={24}
                priority="true"
              />
            </a>
          </Link>
        </div>
        <p className=" text-body text-sm">
          &copy; {new Date().getFullYear()} XPONENT InfoSystem(PVT) Ltd. All
          rights reserved.
        </p>
      </div>
      <div className="mt-8 border-gray-200 pt-8 flex justify-center text-sm font-medium gap-4 text-slate-900">
        <p className="border-r px-4"> Privacy Policy</p>
        <p> Changelog</p>
      </div>
    </footer>
  );
}
