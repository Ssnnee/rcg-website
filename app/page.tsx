import LectureCommittee from "@/components/Committee/LectureCommittee";
import ScientificCommittee from "@/components/Committee/ScientificCommittee";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import book from "../public/book.png";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between mb-h">
      <Header />

      <section id='accueil' className=" my-16 p-4 max-w-[75rem] flex flex-col md:flex-row justify-center items-center">

        <figure className='h-44 sm:h-52 overflow-hidden md:hidden mb-10' >
          <Image
            src={book}
            alt="placeholder"
            title='Revue Congolaise de Gestion'
            className="md:hidden xl:h-80 relative"
          />
        </figure>

        <div className="w-full flex flex-col items-center md:items-start">
          <h1 className="lg:text-5xl text-4xl font-bold text-center md:text-left">
            La Revue Congolaise de Gestion
          </h1>
          <p className="text-3xl text-center md:text-left mt-4 font-imbue">
            Revue semestrielle publiée par l&apos;École Supérieure de
            Gestion et d&apos;Administration des Entreprises <a href='https://esgae.org'> (E.S.G.A.E.) </a>
          </p>
          <Button variant={"default"} className="mt-11 p-5 w-max transform transition-all hover:scale-105">
            <a href="#contact" className="text-xl">Nous contacter</a>
          </Button>
        </div>

        <figure className='w-full md:w-2/3 flex justify-center relative mb-2' >
          <Image
            src={book}
            alt="Revue actuelle"
            title='Revue Congolaise de Gestion' className="hidden md:block xl:h-80 relative"
          />
        </figure>
      </section>

      <section id='apropos' className="w-full bg-green-500 my-14 md:my-24  mx-auto p-4 min-h-[20vh] flex items-center flex-col border-y border ">
        <div className='w-full flex flex-col text-left gap-6 max-w-[75rem] text-xl py-12'>
          <h1 className="text-3xl font-bold text-center ">  A propos </h1>
          <p>
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

          <Separator />

          <div className="">
            <h2> Directeurs Scientifiques </h2>
            <p> <strong> Pr Oliver Jean Marie GAUSSENS / Pr. André Patient BOKIBA  </strong> </p>
            <p> E.S.G.A.E - Congo  </p>
          </div>
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
            <p> Université de Bouaké, Côte d&apos;Ivoire  </p>

          </div>

          <Separator />

          <div>
            <p> Institution de rattachement : <strong> E.S.G.A.E - Congo </strong>  </p>
            <p> Périodicité : <strong> 2 n<sup>os</sup> par an </strong> </p>
            <p> ISBN : <strong> 979-10-97468-29-3 </strong> </p>
            <p> ISSN : <strong> 1729-0228 </strong> </p>
            <p> ISSN en ligne : <strong> 2411-0884 </strong> </p>
            <p> Editeur : <strong> ESGAE </strong> </p>
          </div>

          <Separator />

          <div>
            <h2> Secrétaire de rédaction </h2>
            <p> <strong> Grâce NKOUZOU </strong> </p>
          </div>

          <Separator />

          <div>
            <h2> <strong> Charte Ethique </strong> </h2>
            <p>
              Les règles éthiques applicables aux comités de rédaction Revue Congolaise de Gestion, sont disponibles sur
              <a
                href="https://www.cairn.info/charte-ethique.php"
                className="text-blue-500 " > cette page . </a>
            </p>
          </div>

        </div>

      </section>

      <section id='comitéscientifique' className="w-full mx-auto min-h-[100vh] px-6 py-16 mt-6 flex justify-center items-center flex-col ">
        <h1 className="text-3xl font-bold text-center ">  Comité Scientifique de la Revue Congolaise de Gestion </h1>
        <br />
        <ScientificCommittee />
      </section>

      <section id='comitédelecture' className="bg-green-500 w-full mx-auto min-h-[100vh] px-6 py-16 mt-6 flex justify-center items-center flex-col border border-gray-20">
        <h1 className="text-3xl font-bold text-center ">  Comité de lecture  de la Revue Congolaise de Gestion </h1>
        <br />
        <LectureCommittee />
      </section>

      <section id='contact' className="w-full mx-auto px-6 py-16 mt-6 flex justify-center items-center flex-col">
        <Card className="w-full max-w-[750px]">
          <CardHeader>
            <CardTitle className="text-3xl text-center">Nous contacter</CardTitle>
            <CardDescription className="text-center">
              Souhaitez-vous nous contacter ?
              Remplissez le formulaire ci-dessous.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
      </section>

      <Footer />
    </main>
  );
}
