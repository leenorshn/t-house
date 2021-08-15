import Image from "next/image";
function MediumCard({house}) {
    return (
        <div className="p-3 transition duration-300 transform cursor-pointer hover:scale-105 easy-out">
            <div className="relative rounded-md w-72 h-72">
            <Image src={house.img} layout="fill" className="rounded-lg"/>
            </div>
            <h3 className="text-2xl text-purple-800">{house.title}</h3>
        </div>
    )
}

export default MediumCard;
