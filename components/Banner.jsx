import Image from "next/image";

function Banner() {
    return (
        <div className="p-24 flex justify-between items-center h-[200px] sm:h-[300px] lg:h-[400px] bg-blue-600 text-blue-50">
            
             <div className="flex flex-col items-start w-full space-y-3 text-sm font-semibold text-center text-red-400 md:text-xl lg:text-2xl top-1/2">
                 <p className="text-3xl text-white">Pourque vos taxes entrent au tresor public</p>
                <h2 className="text-5xl font-semibold text-orange-100">La DGRAD Butembo</h2>
                <h4 className="text-2xl font-light text-blue-50">pour vous recouvrer</h4>
             </div>
             <Image src="/arm.png"
             width={240}
             height={240}
             objectFit="contain"
             />
        </div>
    )
}

export default Banner;
