import Navbar from "@/components/navbar"
import { Inter } from "next/font/google"
import Link from "next/link"

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
    return(
        <main className="bg-pattern flex min-h-screen flex-col items-center justify-between p-24">
            <Navbar></Navbar>

            <div className="mx-12 px-5 grid relative">
            <div className="flex flex-row justify-between mt-5 mb-14">
                <div className="p-4 basis-2/4 justify-self-start static">
                    <p className="mb-4 text-lg">Voor dit portfolio heb ik ervoor gekozen om een website te maken met Next.js. Ik heb enige kennis van React en wilde mijn vaardigheden uitbreiden door te leren werken met een React-framework. Next.js biedt ook veel functies waar ik nog weinig ervaring mee heb, zoals server-side rendering en search engine optimization. Ik denk dat deze vaardigheden als ontwikkelaar in de toekomst van pas zullen komen.</p>
                    <p className="mb-4 text-lg">Voordat ik begon aan de website, heb ik eerst andere portfolio&apos;s op internet bekeken voor inspiratie. Zo had ik een idee van hoe mijn website eruit zou gaan zien. Voor mijn selectie van de drie activiteiten wilde ik iets speciaals doen. Voor de hackathon voor kinderen met motorische beperkingen heb ik ervoor gekozen om tekst naar spraak toe te voegen, zodat mensen die moeite hebben met lezen de tekst kunnen voorlezen. Ik heb ervoor gekozen om dit op een gratis manier te doen door de tekst van tevoren uit te laten lezen en vervolgens de audio file te uploaden. Voor de Google hackathon heb ik ervoor gekozen om één probleem te kiezen en mijn gedachtegang en code voor de oplossing uit te leggen. Zo kan ik mijn vaardigheden als ontwikkelaar laten zien en anderen helpen die het probleem niet kunnen oplossen. De laatste activiteit was de website zelf, waarbij ik de nadruk legde op search engine optimization. Zo wilde ik laten zien dat ik als ontwikkelaar invloed kan hebben op het bereik van de websites die ik maak.</p>                
                    <p className="mb-4 text-lg">Bij het ontwikkelen van de website heb ik eerst de landingspagina gemaakt met een mooie achtergrond die zich aanpast aan het thema van de browser. Hier geef ik wat basisinformatie over de website en links naar mijn GitHub- en LinkedIn-pagina&apos;s. Ook voegde ik een foto van mezelf toe zodat mensen weten hoe ik eruitzie. Voordat ik aan de drie activiteiten begon, heb ik ervoor gezorgd dat de website werd gehost. Aangezien ik met Next.js werkte, koos ik ervoor om de website te hosten op Vercel omdat dit proces heel eenvoudig is.
 De eerste activiteit waar ik een pagina voor heb gemaakt is de hackathon. Zoals al eerder gezegd, wil ik hier tekst naar spraak toevoegen. Ik heb de audiofiles gemaakt met de website TTSFree.com, hier kon ik stukken van mijn tekst uploaden en moest ik op het einde gewoon alle stukken samenvoegen in één groot bestand in plaats van veel kleintjes.
 </p>                </div>
                <div className="static basis-2/4">
                    <embed src="https://portfolio-pxl.vercel.app" className="w-full h-full border-white border-2 border-solid rounded-lg"></embed>
                </div>
            </div>

            <div className="flex flex-row justify-between mt-5 mb-14 h-96">
            <div className="static basis-2/4">
                    <embed src="https://portfolio-pxl.vercel.app/blog/pxl-hackathon" className="w-full h-full"></embed>
                </div>
                <div className="p-4 basis-2/4 justify-self-start static">
                    <p className="mb-4 text-lg">De eerste activiteit waar ik een pagina voor heb gemaakt is de hackathon. Zoals al eerder gezegd, wil ik hier tekst naar spraak toevoegen. Ik heb de audiofiles gemaakt met de website TTSFree.com, hier kon ik stukken van mijn tekst uploaden en moest ik op het einde gewoon alle stukken samenvoegen in één groot bestand in plaats van veel kleintjes.</p>                </div>
            </div>
            <div className="flex flex-row justify-between mt-5 mb-14 h-96">
                <div className="p-4 basis-2/4 justify-self-start static">
                    <p className="mb-4 text-lg">De tweede activiteit op mijn website is de google hackathon. Hier heb ik de vraag die ik het fijnste vond volledig uitgelegd en mijn gedachtegang uitgelegd. Ik heb ervoor gekozen om maar één vraag uit te leggen omdat mijn gedachtegang niet veel verschilt tussen alle vragen. Hiermee wilde ik mensen die willen beginnen met coding challenges inzicht geven hoe ze de problemen kunnen aanpakken.</p>                </div>
                    <div className="static basis-2/4">
                    <embed src="https://portfolio-pxl.vercel.app/blog/google-codejam" className="w-full h-full border-white border-1 border-solid"></embed>
                </div>
            </div>
            <div className="flex flex-row justify-between mt-5 mb-14 h-96">
                <div className="p-4 basis-2/4 justify-self-start static">
                    <p className="mb-4 text-lg">De laatste activiteit staat niet echt op de website zelf omdat het de website zelf is. Het doel van deze was vooral voor mijzelf. Ik wou hiermee nieuwe dingen leren en dat heb ik ook gedaan. Ik heb geleerd hoe ik SVG-achtergronden kan gebruiken om makkelijk en snel mooie achtergronden te creëren. Ik heb geleerd hoe Next.js werkt en hoe het search engine optimization makkelijk maakt. En als laatste heb ik ook kunnen oefenen hoe ik mijn websites toegankelijker kan maken voor iedereen.</p>                </div>
                    <div className="static basis-2/4">
                    <embed src="https://portfolio-pxl.vercel.app/blog/google-codejam" className="w-full h-full border-white border-1 border-solid"></embed>
                </div>
            </div>

            <div className="justify-self-center w-2/3" >
                <p className="mb-4">Ik ben heel trots op de website die ik heb gemaakt. Tijdens het maken van de website ben ik niet echt tegen grote problemen aangelopen. Een paar kleinere problemen zoals het voorlezen van de tekst wou ik oorspronkelijk in realtime doen maar dit kost vaak geld dus heb ik dit opgelost door het met een gratis website te laten doen en dan de audiofile gewoon uploaden. Nog iets wat ik met deze website heb geleerd is dat ik niet zo heel goed in zelf creatieve dingen ontwerpen en dat ik veel beter ben met voorbeelden van andere mensen. In de opleiding is zou ik het cool vinden als er een verplicht project is waar de focus ligt op toegankelijkheid. Want momenteel zijn er geen verplichte momenten om bij te leren over websites en applicaties toegankelijk te maken. Ik vind namelijk dat dit iets zeer belangrijk is om als developer toe te passen op de websites die we bouwen. Ik heb gekozen om deze activiteit in mijn portfolio te zetten omdat ik het iets fijn vond. Dit is de reden dat ik al mijn activiteiten heb gekozen. Uit ervaring weet ik dat ik het beste leer als ik iets fijn vind. En deze website maken vond ik heel rustgevend en leerrijk. Tegen het einde van de richting worden de meeste projecten die we doen ingewikkelder, wat begrijpelijk is, maar het was heel fijn om gewoon terug te gaan naar iets simpels. Maar het is niet omdat het simpel is dat er niets te leren valt.</p>
            </div>
            </div>
            
        </main>
    )}