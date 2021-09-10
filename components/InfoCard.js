import { StarIcon } from "@heroicons/react/solid";
import { HeartIcon } from "@heroicons/react/outline";
import Image from "next/image";

function InfoCard({ img, location, title, description, star, price, total }) {
  return (
    <div className="flex px-2 transition duration-150 ease-out transform border-b cursor-pointer py-7 hover:opacity-80 hover:shadow-lg first:border-t">
      <div className="relative flex-shrink-0 w-40 h-24 md:h-52 md:w-80">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        ></Image>
      </div>
      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p>{location}</p>
          <HeartIcon className="cursor-pointer h-7"></HeartIcon>
        </div>
        <h4 className="text-xl">{title}</h4>
        <div className="w-10 pt-2 border-b"></div>
        <p className="flex-grow pt-2 text-sm text-gray-500">{description}</p>

        <div className="flex items-end justify-between pt-5">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400"></StarIcon>
            {star}
          </p>
          <div>
            <p className="pb-2 text-lg font-semibold lg:text-2xl">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
