import Image from "next/image";

function Banner() {
    return (
        <div className="relative h-[200px] sm:h-[300px] lg:h-[400px]">
            <Image src="https:links.papareact.com/0fm"
             layout="fill"
             objectFit="fill"
             />
             <div className="absolute w-full space-y-3 text-sm font-semibold text-center text-red-400 md:text-xl lg:text-2xl top-1/2">
                 <p className="text-5xl text-black">Avez-vous besoin d'un logement? Parfait</p>
                 <button
                 className="px-6 py-2 text-base text-red-400 bg-white rounded-full shadow-md hover:shadow-xl"
                 >Commencer par ici</button>
             </div>
        </div>
    )
}

export default Banner;
