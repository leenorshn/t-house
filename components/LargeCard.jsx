import Image from "next/image";

function LargeCard({img,title,description,buttonText}) {
    return (
        <section>
            <div className="relative h-96 rounded-xl">
                <Image src={img} layout="fill" objectFit="cover"/>
            </div>
            <div>
                <h1>{title}</h1>
                <p>{description}</p>
                <button>{buttonText}</button>
            </div>
        </section>
    )
}

export default LargeCard;
