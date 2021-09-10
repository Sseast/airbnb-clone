import {  GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon } from '@heroicons/react/solid'
import Image from "next/image";

function Header() {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 p-5 bg-white shadow-md md:px-10 ">
            {/* Left */}
            <div className="relative flex items-center h-10 my-auto cursor-pointer ">
                <Image
                src="https://cdn0.iconfinder.com/data/icons/picons-social/57/68-airbnb-512.png" layout="fill" objectFit='contain' objectPosition='left' ></Image>
            </div>

            {/* Middle */}
            <div className="flex items-center py-2 rounded-full md:shadow-sm md:border-2">
            <input type="text" className="flex-grow pl-5 text-sm text-gray-600 placeholder-gray-400 bg-transparent outline-none " placeholder="Start your search" />
            <SearchIcon className="hidden h-8 p-2 text-white bg-red-400 rounded-full cursor-pointer md:mx-2 md:inline-flex" ></SearchIcon>

            </div>

            {/* Right */}
            <div className="flex items-center justify-end space-x-4">
                <p className="hidden cursor-pointer md:inline">Become a host</p>
                <GlobeAltIcon className="h-6 cursor-pointer"></GlobeAltIcon>
                <div className="flex items-center p-2 space-x-2 border-2 rounded-full">
                    <MenuIcon className="h-6 cursor-pointer"></MenuIcon>
                    <UserCircleIcon className="h-6 cursor-pointer"></UserCircleIcon>
                </div>
                <SearchIcon className="h-6 cursor-pointer"></SearchIcon>
            </div>
        </header>
    )
}

export default Header
