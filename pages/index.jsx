import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import SmallCard from '../components/SmallCard';
import MediumCard from "../components/MediumCard";
import LargeCard from '../components/LargeCard';

export default function Home({exploreData,cardsData}) {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header */}
      <Header/>
      {/* banner */}
      <Banner/>
      {/* main */}
      <main className="max-w-6xl p-4 px-8 mx-auto bg-white shadow-sm md:px-16">
          <section className="pt-2">
            <h1 className="text-4xl font-semibold">Explore nearby</h1>
            <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {exploreData?.map(item=>(
             
                <SmallCard house={item} key={item.img}/>
              
            ))}
            </div>
            </section>
            <section className="my-6">
              <h2 className="text-4xl font-semibold">Live anywhere</h2>
              <div className="flex items-center -mx-16 space-x-3 overflow-x-scroll scrollbar-hide">
              {cardsData?.map(item=>(
                <MediumCard house={item} key={item.img}/>
              ))}
              </div>
              
            </section>
            <LargeCard
              img="https://links.papareact.com/4cj"
              title="Greatest outdoors"
              description="With your love in motion"
              buttonText="Get inspered"

            />
      </main>
      
    </div>
  )
}

export async function getStaticProps(){
  const exploreData=await fetch('https://links.papareact.com/pyp').then((data)=>data.json());
  const cardsData=await fetch('https://links.papareact.com/zp1').then((data)=>data.json());
return {
  props:{
    exploreData,
    cardsData
  }
}
}
