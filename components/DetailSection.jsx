/* This example requires Tailwind CSS v2.0+ */
import { ExternalLinkIcon } from '@heroicons/react/solid'
import Image from "next/image";

export default function DetailSection() {
  return (
    <div className="relative bg-gray-800 rounded-xl">
      <div className="h-56 overflow-hidden bg-orange-600 rounded-l-xl sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        <Image
          className="object-cover w-full h-full "
          src="/dg.jpg"
          alt=""
          layout='fill'
        />
      </div>
      <div className="relative px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-16">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">DGRAD Butembo</p>
          <p className="mt-3 text-lg text-gray-300">
          Et en ville de Butembo, la DGRAD est située en Commune KIMEMI, Quartier KAMBALI, Avenue MATOKEO, N°53
          </p>
          <p className="mt-3 text-lg text-gray-300">La Direction Générale des Recettes Administratives, Judiciaires, Domaniales et de Participations compte à son sein une Direction provinciale et plusieurs divisions et chaque division compte deux bureaux : la division de l’administration et des services ainsi que la division de contrôle et d’ordonnancement </p>
          
          
        </div>
      </div>
    </div>
  )
}

