import Image from "next/image";

function SmallCard({house}) {
    return (
        <div className="flex items-center m-2 space-x-4 transition duration-200 ease-in-out transform rounded-md cursor-pointer hover:scale-105 hover:bg-gray-100">
           <div className="relative w-16 h-16">
                <Image src={house.img} layout="fill" className="rounded-lg"/>
           </div>
           <div>
               <h3 className="text-lg font-semibold text-purple-900">{house.location}</h3>
               <p>{house.distance}</p>
           </div>
        </div>
    )
}

export default SmallCard
