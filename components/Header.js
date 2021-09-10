import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/solid";
import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import { useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const router = useRouter();

  const selectionRange = {
    key: "selection",
    startDate: startDate,
    endDate: endDate,
  };

  const resetInput = () => {
    setSearchInput("");
  };

  const search = () => {
    router.push({
      pathname: "search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests,
      },
    });
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 p-5 bg-white shadow-md md:px-10 ">
      {/* Left */}
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-10 my-auto cursor-pointer "
      >
        <Image
          src="https://cdn0.iconfinder.com/data/icons/picons-social/57/68-airbnb-512.png"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        ></Image>
      </div>

      {/* Middle */}
      <div className="flex items-center py-2 rounded-full md:shadow-sm md:border-2">
        <input
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
          type="text"
          className="flex-grow pl-5 text-sm text-gray-600 placeholder-gray-400 bg-transparent outline-none "
          placeholder={placeholder || "Start you search"}
        />
        <SearchIcon className="hidden h-8 p-2 text-white bg-red-400 rounded-full cursor-pointer md:mx-2 md:inline-flex"></SearchIcon>
      </div>

      {/* Right */}
      <div className="flex items-center justify-end space-x-4">
        <p className="hidden cursor-pointer md:inline">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer"></GlobeAltIcon>
        <div className="flex items-center p-2 space-x-2 border-2 rounded-full">
          <MenuIcon className="h-6 cursor-pointer"></MenuIcon>
          <UserCircleIcon className="h-6 cursor-pointer"></UserCircleIcon>
        </div>
      </div>
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto mt-1">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5b61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center mb-4 border-b">
            <h2 className="flex-grow text-2xl font-semibold ">
              Number of Guests
            </h2>
            <UserIcon className="h-5"></UserIcon>

            <input
              value={noOfGuests}
              onChange={(e) => setNoOfGuests(e.target.value)}
              type="number"
              className="w-12 pl-2 text-lg text-red-500 outline-none "
              min={1}
              pattern="\d*"
            />
          </div>
          <div className="flex">
            <button onClick={resetInput} className="flex-grow text-gray-500">
              Cancel
            </button>
            <button onClick={search} className="flex-grow text-red-500">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
