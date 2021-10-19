import Image from "next/image";
import { useState } from "react";
function MediumCard({house}) {

  const [phone,setPhone]=useState('')

  const saveSuscription=()=>{
    
  }
    return (
        <div className="max-w-6xl mx-auto sm:max-w-3xl lg:max-w-7xl ">
            <div className="relative px-6 py-10 overflow-hidden bg-indigo-500 rounded shadow-sm sm:px-12 sm:py-20">
              <div aria-hidden="true" className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">
                <svg
                  className="absolute inset-0 w-full h-full"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 1463 360"
                >
                  <path
                    className="text-indigo-400 text-opacity-40"
                    fill="currentColor"
                    d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                  />
                  <path
                    className="text-indigo-600 text-opacity-40"
                    fill="currentColor"
                    d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                  />
                </svg>
              </div>
              <div className="relative">
                <div className="sm:text-center">
                  <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                    Nos services de notification
                  </h2>
                  <p className="max-w-2xl mx-auto mt-6 text-lg text-rose-100">
                    Pour etre notifier lorsque il ya une information a vous diffuser 
                    <br />
                    Veuillez entrer votre numero de telephone
                  </p>
                </div>
                <form action="#" className="mt-12 sm:mx-auto sm:max-w-lg sm:flex">
                  <div className="flex-1 min-w-0">
                    <label htmlFor="cta-phone" className="sr-only">
                      Telephone
                    </label>
                    <input
                      id="cta-phone"
                      type="phone"
                      className="block w-full px-5 py-3 text-base text-gray-900 placeholder-gray-500 border border-transparent rounded-md shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-rose-500"
                      placeholder="Enter your phone"
                    />
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-3">
                    <button
                      type="submit"
                      className="block w-full px-5 py-3 text-base font-medium text-white bg-gray-900 border border-transparent rounded-md shadow hover:bg-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-rose-500 sm:px-10"
                    >
                      Notifie moi
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
    )
}

export default MediumCard;
