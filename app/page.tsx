import LectureCommittee from "@/components/Committee/LectureCommittee";
import ScientificCommittee from "@/components/Committee/ScientificCommittee";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import book from "../public/book.png";
import ScientificDirector from "@/components/Committee/ScientificDirecteur";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between mb-h">
      <Header />

      <section id='accueil' className="container mx-auto p-4 min-h-[30rem] flex flex-col md:flex-row justify-center items-center border border-gray-200 rounded">

        <figure className='h-44 sm:h-52 overflow-hidden md:hidden mb-10' >
          <Image
            src={book}
            alt="placeholder"
            title='Revue Congolaise de Gestion'
            className="md:hidden xl:h-80 relative"
          />
        </figure>

        <div className="w-full">
          <h1 className="lg:text-5xl text-4xl font-bold text-center md:text-left">
            La Revue Congolaise de Gestion
          </h1>
          <p className="text-lg text-center md:text-left mt-4 font-imbue">
            Revue semestrielle publiée par l&apos;École Supérieure de
            Gestion et d&apos;Administration des Entreprises <a href='https://esgae.org'> (E.S.G.A.E.) </a>
          </p>
        </div>

        <figure className='w-full md:w-2/3 flex justify-center relative mb-2' >
          <Image
            src={book}
            alt="Revue actuelle"
            title='Revue Congolaise de Gestion' className="hidden md:block xl:h-80 relative"
          />
        </figure>
      </section>

      <section id='apropos' className="container mx-auto my-4 p-4 min-h-[20vh] flex items-center flex-col border border-gray-200 rounded">
        <div className='w-full flex flex-col text-left gap-6 text-xl'>
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
            <p> <strong> Grâce NKOUZOU ; Blin NKOUKA  </strong> </p>
          </div>

          <Separator />

          <div>
            <h2> <strong> Charte Ethique </strong> </h2>
            <p>
              Les règles éthiques applicables aux comités de rédaction de la revues
              académiques Revue Congolaise de Gestion, sont disponibles sur
              <a
                href="https://www.cairn.info/charte-ethique.php"
                className="text-blue-500 " > cette page . </a>
            </p>
          </div>

        </div>

      </section>

      <section id='comitéscientique' className="container mx-auto min-h-[100vh] p-6 mt-6 flex justify-center items-start flex-col border border-gray-200 rounded">
        <h1 className="text-3xl font-bold text-center ">  Comité Scientifique de la Revue Congolaise de Gestion </h1>
        <br />
        <ScientificCommittee />
      </section>

      <section id='comitéscientique' className="container mx-auto min-h-[100vh] p-6 mt-6 flex justify-center items-start flex-col border border-gray-200 rounded">
        <h1 className="text-3xl font-bold text-center ">  Comité de lecture  de la Revue Congolaise de Gestion </h1>
        <br />
        <LectureCommittee />
      </section>

      <Footer />

    </main>
  );
}
