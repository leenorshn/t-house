import Image from "next/image";
import Link from "next/link";


function Header() {
  return (
    <header className="sticky top-0 z-50 flex justify-between px-4 py-4 bg-white shadow md:px-5 md:py-6">
      {/* left */}
      <div className="relative flex items-center h-12 my-auto space-x-20 cursor-pointer ">
        <Image
          src="/logo.jpg"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
        <Link href="/">
          <h3 className="flex-shrink-0 text-3xl font-bold text-blue-600 ml-28">
            <span className="text-orange-600">DGRAD</span> Butembo
          </h3>
        </Link>
      </div>
      {/* middle */}

      {/* right */}
      <div className="flex items-center justify-end space-x-4 text-gray-500">
        <button className="px-8 py-2 text-white bg-blue-600 rounded-md shadow">
          Contactez-nous
        </button>
      </div>
    </header>
  );
}

export default Header;
