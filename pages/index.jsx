import Head from 'next/head';
import Banner from '../components/Banner';
import Header from '../components/Header';
import MediumCard from "../components/MediumCard";
import Footer from '../components/Footer';
import DetailSection from '../components/DetailSection';
import ServiceCard from '../components/ServiceCard';
import ContactPage from '../components/Contact';

const servicesD=[{
title:"Recouvrement de taxe",
description:"Nous procedons au recouvrement pour des taxes non-fisco de la ville de Butembo"
},
{
  title:"Sensibilisation pour un nouveau taxe",
  description:"Nous procedons au recouvrement pour des taxes non-fisco de la ville de Butembo"
  },

  {
    title:"Controle de taxe",
    description:"Nous procedons au recouvrement pour des taxes non-fisco de la ville de Butembo"
    },

]

export default function Home({exploreData,cardsData}) {
  return (
    <div className="">
      <Head>
        <title>DGRAD Butembo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header */}
      <Header/>
      {/* banner */}
      <Banner/>
      {/* main */}
      <main className="max-w-6xl mx-auto shadow-sm rounded-b-2xl">
          <section className="pt-2">
            <h1 className="text-4xl font-semibold text-blue-600">Bureau central</h1>
            
            </section>
            <section className="my-6 space-y-8">
              <DetailSection/>
              <h1 className="text-4xl font-semibold text-blue-600">Nos services</h1>
            
              <div className="grid grid-cols-3 gap-4">
                  {servicesD.map(p=>(<ServiceCard key={p.title} title={p.title} description={p.description}/>))}
              </div>
              <MediumCard/>
              
            </section>
            <ContactPage/>
            
      </main>
      <Footer/>
    </div>
  )
}


