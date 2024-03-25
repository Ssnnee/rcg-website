import { useState } from 'react'
import './App.css'

import { Separator } from "@/components/ui/separator"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

import { commiteeMembersList } from './constants/commiteeMembersList'

import book from './assets/book.jpg'


function App() {

  return (
    <>
      <Header />

      <section id='accueil' className="container mx-auto p-4 min-h-[100vh] flex justify-center items-center border border-green-200 rounded">
        <div className="w-2/3">
          <h1 className="text-4xl font-bold text-center md:text-left">
            Bienvenue sur le site officiel de la Revue Congolaise de Gestion
          </h1>
          <p className="text-lg text-center md:text-left mt-4 font-imbue">
            La Revue Congolaise de Gestion (RCG) est une publication francophone
            de recherche et de vulgarisation scientifique dans les domaines de la science économique et de la gestion.
            Le premier objectif de La Revue Congolaise de Gestion est de permettre
            à des chercheurs seniors et juniors mais aussi à des professionnels
            de communiquer, d’échanger et de soumettre à la critique leurs réflexions
            et leurs recherches sur le monde de l’économie notamment sur un des
            acteurs essentiels- l’entreprise – et d’appliquer les disciplines de
            gestion à des situations concrètes. Le deuxième objectif vise à atteindre
            un large public désireux de se tenir au courant de l’évolution de la science économique et des sciences de gestion.
          </p>
        </div>

        <figure className='w-full md:w-2/3 flex justify-end relative mb-2' >
          <a href={book} >
            <img src={book} alt="placeholder" title='Revue Congolaise de Gestion' className="hidden md:block xl:h-[500px] relative" />
          </a>
        </figure>
      </section>

      <section id='comitéscientique' className="container mx-auto min-h-[100vh] p-6 mt-6 flex justify-center items-start flex-col border border-green-200 rounded">
        <h1 className="text-3xl font-bold text-center ">  Comité Scientifique de la Revue Congolaise de Gestion </h1>
        <br />
        <div className='flex gap-4 flex-col text-left  text-xl'>
          {commiteeMembersList.map((member, index) => (
            <div key={index} >
              <a href={member.resumeUrl}>
                <h2> {member.name} </h2>
                <p> {member.univercity} </p>
              </a>
            {index !== commiteeMembersList.length - 1 && <Separator />}
            </div>
          ))}
        </div>
      </section>



      <section id='ensavoirplus' className="container mx-auto my-4 p-4 min-h-[20vh] flex items-center flex-col border border-green-200 rounded">
        <div className='w-full flex flex-col text-left gap-6 text-xl'>
          <p> Revue semestrielle publiée par l'École Supérieure de
              Gestion et d' Administration des Entreprises <a href='https://esgae.org'> (E.S.G.A.E.) </a>
          </p>

          <Separator />

          <div className="">
            <h2> Directeur de la publication </h2>
            <p> <strong> Pr Roger Armand MAKANY  </strong> </p>
            <p> E.S.G.A.E - Congo  </p>
          </div>
          <Separator />
          <div>
            <h2> Rédacteur en Chef </h2>
            <p> <strong> Pr Augustin A. Adja ANASSE  </strong> </p>
            <p> Université de Bouaké, Côte d'Ivoire  </p>

          </div>

          <Separator />

          <div>
            <p> ISBN : <strong> 979-10-97468-29-3 </strong> </p>
            <p> ISSN : <strong> 1729-0228 </strong> </p>
          </div>

        </div>

      </section>

      {/* <section id='archives' className="container mx-auto p-4 min-h-[100vh] flex justify-center items-center flex-col">
        <h1 className="text-4xl font-bold text-center"> Archives </h1>
        <p className="text-lg text-center">This is a simple starter template for React projects</p>
      </section> */}

      <Footer />
    </>
  )
}

export default App
