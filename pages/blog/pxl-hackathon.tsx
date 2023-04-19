import Navbar from "@/components/navbar";
import { Inter } from "next/font/google";
import ReactAudioPlayer from "react-audio-player";
import Image from 'next/image'
import { useEffect } from "react";


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return(
    <main className="bg-pattern flex min-h-screen flex-col items-center justify-between p-24 w-100%">
        <Navbar></Navbar>
        <div className="p-4 m-4">
        <h1 className={`${inter.className} mb-3 text-4xl font-semibold`}>PXL Hackathon</h1>
            <p>Audio description:</p>
        <ReactAudioPlayer
  src="/blog/ReadAudio.mp3"
  controls
/>
</div>
        <div className="mx-12 px-5 grid relative">
            <div className="flex flex-row justify-between mt-5 mb-14">
                <div className="p-4 basis-2/4 justify-self-start static">
                    <p className="mb-4 text-lg">Het project ging van start met een introductie. Hierbij gaven twee studenten van ergotherapie uitleg over het project en belangrijker wie het doelpubliek voor het project was. Het doelpubliek was een klas met leerlingen met motorische beperkingen en dit was ook het belangrijkste in het project: het moest makkelijk bruikbaar zijn voor de leerlingen. De applicatie had twee hoofddoelen: het eerste was meetkunde. Hiermee zouden de studenten vormen kunnen tekenen, lengte meten en hoeken meten. Het tweede doel was wiskundige sommen, dit is wiskundige formules oplossen door getallen en symbolen te slepen. De studenten gaven aan dat bruikbaarheid extreem belangrijk was voor de doelgroep. Dus de focus viel echt op functionaliteit van de applicatie en niet hoe de applicatie er uit ziet.</p>
                    <p className="mb-4 text-lg">De eerste dag van de hackathon was zoals verwacht zeer chaotisch. We waren in een groepje van vijf mensen, vier applicatieontwikkelaars en één van systeem en netwerk. Dus we hadden de taken ruw verdeeld, mijn taak was ervoor zorgen dat we pdf’s kunnen uploaden en opslaan. Dan moest iemand het stuk van getallen en symbolen slepen maken. Iemand anders tekenen en meten. De laatste persoon moest het inlogsysteem maken. De voormiddag van de eerste dag was dus vooral uitleg en voorbereiding. Rond de middag hebben we als één grote groep broodjes gekregen en heb ik samen met een vriend een beetje geschaakt als ontspanning. Na de eerste dag hadden we allemaal apart werkende delen maar dit moest allemaal nog met elkaar geïntegreerd worden en dit was het moeilijkste. Dus op de tweede dag begon de “Integration Hell”. Hier hebben we de tweede dag een paar uur aangezeten om ervoor te zorgen dat het tekenen en slepen boven op de pdf ging en dat het tekenen dan ook werd opgeslagen. Rond de middag hebben we dan pizza besteld om even te ontspannen.</p>
                </div>
                <div className="static basis-2/4">
                    <Image src="/blog/hackathon1.gif" alt="Gif of the application" width={1000} height={1000} className="w-full h-full" />
                </div>
            </div>

            <div className="flex flex-row justify-between mt-5 mb-14">
            <div className="static basis-2/4">
                    <Image src="/blog/hackathon2.gif" alt="Gif of the application" width={1000} height={1000} className="w-full h-full" />
                </div>
                <div className="p-4 basis-2/4 justify-self-start static">
                    <p className="mb-4 text-lg">Na anderhalve dag ontwikkeling hadden we de basisfunctionaliteit. We konden inloggen, tekenen, meten en pdf’s uploaden om te gebruiken. In de paar uur voor het einde hebben we bugs opgelost en hebben we ervoor gezorgd dat het makkelijk is voor de studenten ergotherapie om de applicatie eens uit te testen bij de leerlingen die ze helpen.</p>
                    <p className="mb-4 text-lg" > Aan het einde van de tweede dag hebben we ook een kleine presentatie gegeven aan de andere groepjes, de studenten en de begeleiders van beide richtingen. Tijdens deze presentatie hebben we een demo van de applicatie gegeven maar belangrijker ook besproken wat er nog mist aan de applicatie. Omdat het een hackathon was hebben we niet alle functionaliteit in de applicatie kunnen steken. We hebben dan ook feedback gekregen van de studenten en de begeleider van ergotherapie. Er werden diverse suggesties gedaan voor nieuwe functionaliteiten en er werd ook feedback gegeven op de gebruiksvriendelijkheid van de applicatie. Ook de andere groepjes hebben presentaties gegeven waar we dan ook feedback op konden geven.</p>
                </div>
            </div>
            <div className="justify-self-center w-2/3" >
                <p className="mb-4">De hackathon heeft me zeer veel inzicht gegeven in de ontwikkeling van applicaties. Een van de seminaries die ik heb gevolgd ging over het inclusief maken van applicaties. Maar dit was vooral theoretisch dus was het een beetje moeilijk om de informatie echt te verweken en toe te passen. De hackathon heeft dan echt mijn ogen geopend dat het makkelijk bruikbaar maken van een applicatie soms het verschil kan maken of iemand het kan gebruiken of niet. Bijvoorbeeld we hadden een geodriehoek die we kunnen draaien door de hoeken vast te pakken en te slepen. Maar voor iemand met motorische beperkingen is het zeer moeilijk om dan accuraat een hoek te meten dus we hadden dit misschien beter gedaan met een slider of een input vakje waar de leerling een hoek kan ingeven.</p>
                <p className="mb-4">Deze gedachtegang probeer ik nu op al mijn projecten toe te passen. Dit kan simpel zijn zoals gewoon fatsoenlijk alt-tags toe te voegen aan mijn foto’s tot ingewikkelder, zoals een fatsoenlijke plaats tussen knoppen zodat iemand niet op de verkeerde drukt. Ook het testen van mijn applicaties doe ik nu ook even op een tablet omdat tablets vaak gebruikt worden door mensen met motorische beperkingen omdat muizen en touchpads moeilijk zijn. Ook heb ik veel bijgeleerd over samenwerken in een team als er een grote tijdsdruk is. Aan het begin van het project dacht ik dat zo snel mogelijk ontwikkelen het belangrijkste was. Maar achteraf gezien zou het beter geweest zijn om te communiceren en plannen te maken hoe we de verschillende stukken zouden integreren. Want tijdens het integreren hebben we veel tijd verspilt aan kleine problemen die we hadden kunnen voorkomen met communicatie en planning. Ik heb deze opdracht gekozen om dieper op in te gaan omdat het iets is dat voor de rest van mijn carrière als ontwikkelaar impact gaat hebben op hoe ik een applicatie ontwikkel en ontwerp. Ik heb deze activiteit in mijn portfolio gestoken omdat dit een van de dingen is die ik fijn vond. Ik heb de hackathon gedaan met een paar vrienden en tijdens de hackathon hebben we heel wat kunnen lachen maar ik denk dat we hier ook allemaal veel uit hebben bijgeleerd.  We zijn ook een resultaat bekomen waar we als groep trots op kunnen zijn.</p>
            </div>
        </div>
    </main>
    )

}