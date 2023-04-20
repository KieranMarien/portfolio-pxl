import { Inter } from 'next/font/google';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export default function Intro() {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center mb-16 lg:mb-32" id="">
      <div className="lg:mr-8 basis-1/4">
        <Image
          width={250}
          height={250}
          alt="Kieran Marien foto. Foto van de developer van de website."
          src="/MOI.jpg"
          className="rounded-full"
        />
      </div>
      <div className="text-left basis-3/4">
        <h1 className={`${inter.className} mb-3 text-3xl font-semibold`}>
          Hey, dit is mijn portfolio
        </h1>
        <p className="mb-4">
        Ik ben Kieran Marien, een 21 jarige student uit Hasselt. Mijn interesses liggen al heel mijn leven dicht bij computers. Door mijn vader die veel bezig is met computers ben ik al sinds klein kind in contact geweest met computers en is er ook een grote interesse ontstaan voor computers. Maar is niet alleen aan de software kant, oorspronkelijk was ik heel geïnteresseerd in het hardware gedeelte. Voordat ik aan de applicatie-ontwikkeling ben beginnen studeren was ik eerst aan het studeren om industrieel ingenieur in de elektromechanica te worden. Maar tijdens deze richting heb ik geleerd dat ik ervan hou om applicaties te bouwen en ben ik ook van richting veranderd om applicatieontwikkeling te leren. 
        </p>
        <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
          Beetje meer over mij
        </h2>
        <p>
        Ik ben iemand die heel eerlijk is met zichzelf, hiermee bedoel ik dat ik weet wat ik kan en wat ik niet kan. Volgens thalento ben ik voornamelijk iemand uitvoerend. Dit betekent dat ik graag opdrachten nauwgezet en  conform tot de richtlijnen vervul. Ik ben het hier niet helemaal mee akkoord. Het is waar dat ik liever een opdracht krijg toegewezen maar ik heb liefst zo veel mogelijk vrijheid. Als iemand mij ongeveer in de juiste richting wijst dan ben ik iemand die op een zelfstandige manier de opdracht kan uitvoeren. Dit spreekt ook een ander deel van mijn Thalento-rapport tegen, ze zeggen dat ik niet hou van ruimte en zelfstandig werk. Wat ik vind is dat dit mijn persoonlijkheid volledig tegenspreekt. Dus ik vertel liever zelf wat mijn sterktes en zwaktes zijn. Ik ben goed in nieuwe dingen leren en mij aanpassen aan nieuwe omgevingen. Maar ik ben niet zo goed in organisatie of in mijn tijd beheren. Ook ben ik niet zo goed in lange teksten te schrijven of presentaties te geven. Maar ik werk wel zeer goed onder tijdsdruk. 
        </p>
        <h2 className={`${inter.className} mb-3 mt-5 text-2xl font-semibold`}>3-5</h2>
        <p className="mb-4 mt-5">Over drie tot vijf jaar zijn er veel dingen die ik zou willen doen. Reizen is een van mijn favoriete dingen om te doen. Ik zou elk jaar iets nieuws willen zien, dit moet niet altijd iets ver zijn maar zeker eens een reis naar Zuid-Amerika willen maken. Meer aan de IT kant van het verhaal zou ik ook zo veel mogelijk nieuwe technologieën willen uittesten. Dit moet niet altijd een volledig project zijn, het kan gewoon iets heel klein zijn want ik vind dat up-to-date blijven in de IT-sector zeer belangrijk is. Ook zou ik willen werken in een bedrijf met interessante projecten die me blijven uitdagen. Maar het belangrijkste dat ik over veel jaren wil is dat ik mijn passie voor programmeren hou. Momenteel heb ik een beetje schrik dat als ik van programmeren mijn job maak dat ik een beetje de passie voor programmeren ga kwijtraken en ik denk dat mijn passie een van de dingen is die mij een goede programmeur maakt. </p>
      </div>
    </div>
  );
}
