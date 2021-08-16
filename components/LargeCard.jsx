import Image from "next/image";

function LargeCard({img,title,description,buttonText}) {
    return (
        <section className="relative rounded-xl">
            <div className="relative h-96 min-w-[300px] ">
                <Image src={img} layout="fill" objectFit="cover" className="rounded-2xl"/>
            </div>
            <div className="absolute space-y-3 top-28 left-10">
                <h1 className="text-4xl font-semibold ">{title}</h1>
                <p>{description}</p>
                <button className="px-8 py-2 text-white bg-black rounded-full">{buttonText}</button>
            </div>
        </section>
    )
}

export default LargeCard;
