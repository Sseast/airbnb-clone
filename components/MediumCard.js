import Image from "next/image";

function MediumCard({ id, img, title }) {
  return (
    <div className="m-2 mt-5 space-x-4 transition duration-300 ease-out transform cursor-pointer rounded-xl hover:bg-gray-100 hover:scale-105">
      <div className="relative w-80 h-80">
        <Image src={img} layout="fill" className="rounded-xl"></Image>
      </div>
      <div className="mt-3 text-2xl">
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default MediumCard;
