import Image from "next/image";
import { GlobeAltIcon, MenuIcon, SearchIcon, UserIcon } from "@heroicons/react/solid";

function Header() {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 px-4 py-4 bg-white shadow-md md:px-5 md:py-6">
            {/* left */}
            <div className="relative flex items-center h-12 my-auto cursor-pointer">
                <Image 
                src="https://miro.medium.com/max/1400/0*NChTo-XqLOxLabIW"
                layout="fill"
                objectFit="contain"
                objectPosition="left"
                />
            </div>
            {/* middle */}
            <div className="flex items-center rounded-full md:border-2 md:shadow-sm">
                <input type="text" 
                placeholder="Start your search" 
                className="flex-grow pl-4 bg-transparent outline-none" />
                <SearchIcon className="hidden h-8 p-2 mr-2 text-white bg-red-400 rounded-full outline-none cursor-pointer md:inline-flex"/>
            </div>
            {/* right */}
            <div className="flex items-center justify-end space-x-4 text-gray-500">
                <p className="hidden md:inline-flex">Become a host</p>
                <GlobeAltIcon className="h-6"/>
                <div className="flex items-center p-2 space-x-2 border-2 rounded-full cursor-pointer ">
                    <MenuIcon className="h-6"/>
                    <UserIcon className="h-6"/>
                </div>
            </div>
        </header>
    )
}

export default Header
