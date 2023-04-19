import Navbar from "@/components/navbar"
import { Inter } from "next/font/google"
import Image from 'next/image'
import Link from "next/link";
import { CodeBlock, CopyBlock } from "react-code-blocks";


const inter = Inter({ subsets: ['latin'] })
const string =
`t = int(input())                                                                                                       
                                                                                                    
for i in range(1, t+1):                                                                                     
    n = int(input())                                                                                               
    c = list(map(int, input().split()))                                                                                   
    result = assign_numbers(c)                                                                                   
    print("Case #{}: {}".format(i, result))                                                          
                                                                                               
def assign_numbers(c):                                                                            
    num = {}                                                                                      
    n = 1                                                                                         
    for col in c:                                                                                 
        if col not in num:                                                                        
            num[col] = n                                                                          
            n += 1                                                                                
                                                                                                  
    nums = []                                                                                     
    for col in c:                                                                                 
        nums.append(num[col])                                                                     
        if len(nums) > 1 and nums[-1] < nums[-2]:                                                 
            return "IMPOSSIBLE"                                                                   
                                                                                                  
    sorted_c = sorted(set(c), key=lambda col: num[col])                                           
    return " ".join(str(col) for col in sorted_c)                                                   
`
export default function Home() {
    return(
        <main className="bg-pattern flex min-h-screen flex-col items-center justify-between p-24">
            <Navbar></Navbar>
            <h1 className={`${inter.className} mb-3 text-4xl font-semibold`}>Google CodeJam</h1>

            
            <div className="mx-12 px-5 grid relative">
            <div className="flex flex-row justify-between mt-5 mb-14">
                <div className="p-4 basis-2/4 justify-self-start static">
                    <p className="mb-4 text-lg">Op 15/04/2034 heb ik meegedaan aan de Google code jam “farewell round”. Dit is voorlopig de laatste code jam die Google organiseert. Oorspronkelijk ging ik meedoen aan de vorige, maar de dag dat die was kon ik niet, dus heb ik aan de volgende meegedaan. Het duurde 4 uur en bestond uit vijf vragen. Deze vijf vragen moesten zo snel mogelijk opgelost worden en op basis van hoe snel de vragen werden opgelost werden er punten uitgedeeld. De kandidaten met de meeste punten konden verder naar de volgende ronde.</p>
                    <p className="mb-4 text-lg">De code jam begon heel slecht. Ik had me ingeschreven en ik zat in ronde A, volgens de website startte de code jam om 14:00 en eindigde het om 18:00. Maar iets wat ik over het oog had gezien is dat het in UTC was in plaats van GMT+2. Dus de jam begon eigenlijk pas om 16:00 dit was een probleem omdat dit betekende dat het eindigde om 20:00. Ik had om 19:00 plannen gemaakt om te gaan eten en ik kon dit niet echt uitstellen. Maar in plaats van op te geven had ik besloten om mijn best te doen voor de twee uur die ik had en dan de volgende dag de rest van de vragen op te lossen. Dit gaat misschien een beetje tegen de spirit van een code jam maar ik deed niet mee omdat ik naar een volgende ronde wou, ik deed mee omdat ik dit soort vraagstukken oplossen fijn vind.</p>                </div>
                <div className="static basis-2/4">
                    <Image src="/blog/codejam1.gif" alt="Gif of the application" width={1000} height={1000} className="w-full h-full" />
                </div>
            </div>

            <div className="flex flex-row justify-between mt-5 mb-14">
            <div className="static basis-2/4">
                    <Image src="/blog/codejam3.gif" alt="Gif of the application" width={1000} height={1000} className="w-full h-full" />
                </div>
                <div className="p-4 basis-2/4 justify-self-start static">
                    <p className="mb-4 text-lg">De vragen waren heel moeilijk. Ik ben begonnen met alle vragen eens door te lezen, er waren drie vragen waar ik van dacht dat ik ze kon oplossen. Dit waren de eerste, derde en vijfde vragen. Ik heb toen willekeurig een vraag gekozen om als eerst te proberen oplossen. De vraag die ik had gekozen was de derde vraag en hier heb ik ongeveer 45 minuten aan gezeten voordat ik een fatsoenlijke oplossing had. Hierna ben ik begonnen aan de vijfde vraag, hier werkte mijn code gedeeltelijk. Soms was het antwoord juist maar soms was het fout maar ik kon mijn fout niet vinden. Met het voorbeeld invoer kreeg ik de juiste uitkomst maar als ik de vraag probeerde indienen ging er iets mis. Maar omdat de invoer die ze bij het indienen gebruiken niet geven is het heel moeilijk om te debuggen wat er misgaat.</p>
                    <p className="mb-4 text-lg">De volgende dag ben ik vol moed teruggegaan, heb ik een timer van twee uur gezet en zo veel mogelijk proberen doen. Deze dag was veel succesvoller dan de eerste. Na de twee uur heb ik maar één extra vraag kunnen oplossen. Ik heb de andere een paar keer geprobeerd maar de combinatie van de moeilijke vragen en de tijdsdruk maakt het heel moeilijk om fatsoenlijk te denken. De vraag die ik heb opgelost was de eerste vraag: oorspronkelijk wilde ik verder werken aan mijn gedeeltelijke oplossing die ik de dag ervoor had gemaakt. Maar hier zat een fout in die ik niet vond. Dus ben ik volledig van niks begonnen in de hoop dat ik deze keer wel tot een oplossing kon komen en dit is ook gelukt. Dan ben ik teruggegaan naar de vijfde vraag waar ik de vorige dag ook een stuk van had opgelost. Hier heb ik hetzelfde proberen doen als de eerste vraag en ben ik opnieuw van niks begonnen. Maar deze keer is het niet gelukt om deze op te lossen.</p>               
                </div>
                </div>
            <div className="justify-self-center w-2/3" >
                <p className="mb-4 text-lg">De code jam heeft mijn ogen een beetje geopend, ik dacht altijd dat ik redelijk goed was in dit soort vraagstukken. Maar als ik mij nu vergelijk met de resultaten van de andere deelnemers heb ik door dat ik nog veel moet leren. Ik heb op ongeveer vier uur net geen drie vragen opgelost. Terwijl de eerste in de competitie in minder dan achttien minuten alle vragen beantwoordde. Maar dit betekent niet dat ik niet trots ben op wat ik heb bereikt. Van de meer dan achtduizend deelnemers ben ik op plaats 4775 geëindigd en dat is alleen met de eerste twee uur meegerekend omdat de andere vraag pas na het evenement is opgelost. Ik denk dat ik voor de toekomst zeker de planning moet dubbelchecken zodat ik het hele evenement kan meedoen. En ik denk dat ik ook een fout heb gemaakt met mijn taalkeuze, ik had gekozen voor Python maar achteraf gezien had ik beter Javascript gekozen. Omdat ik al redelijk lang geen Python had gebruikt, heb ik veel tijd verspilt om simpele dingen op te zoeken. Terwijl ik recent veel meer gedaan heb met Javascript dus had ik misschien minder tijd verspilt om syntax op te zoeken. Ik heb deze activiteit in mijn portfolio gezet omdat het iets is waar ik niet zo heel goed in ben maar waar ik in de toekomst wel beter in wil worden. In de toekomst ga ik er zeker op oefenen en als ik nog een code jam tegenkom die er interessant uitziet. Dan ga ik nog proberen meedoen en misschien een beter resultaat bekomen dan deze keer. Op deze manier programmeren is niet echt iets wat we veel zien in deze richting. Dit is ook verwacht omdat het niet echt van pas komt tijdens het ontwikkelen van applicaties. Maar bij deze soorten vraagstukken heb ik wel mijn liefde voor programmeren ontdekt en met deze jam is die initiële magie een beetje teruggekomen.</p>                
            </div>
        </div>

        
        <h1 className={`${inter.className} mb-3 text-4xl font-semibold mt-12`}>Hier leg ik even de code uit van 1 van de vragen</h1>
        <Link
          href="https://codingcompetitions.withgoogle.com/codejam/round/0000000000c95b94/0000000000cada38"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
            Google code Jam{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p
            className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
          >
            De opgave van de code jam
          </p>
        </Link>
        <div className="flex flex-row justify-between mt-5 mb-14">
        <div className="basis-2/6">
            <CodeBlock text={string} language={'python'} showLineNumbers={true} theme={'atomOneDark'}></CodeBlock>
        </div>
        <div className="basis-3/5">
        <p className="mb-4 text-lg">
            Het eerste wat we moeten doen is de input van de gebruiker opvragenm, dit doen we met lijn 3. 
            De eerst input laat ons weten hoeveel testcases er zijn. Dan stellen we een for loop op om voor elke testcase de berekening te doen.
            Dan vragen we nog eens de input op maar deze is het voor een van de testcases. We vragen hoeveel nummers er in de testcase gaan zitten.  
            Nu kan de testcase gevraagd worden, hier krijgen we een aantal nummers binnen die we in een lijst steken. Deze lijst geven we dan mee aan de functie: assign_numbers. 
            </p>
            <p className="mb-4 text-lg">

            Deze functie gaat checken of de input kan voldoen aan de volgorde. Eerst maken we een dictionary waar we de nummers zo gezegd op de kaarten schrijven. Bv als de input = 3 8 8 2
            dan gaat onze dictionary er zo uitzien: 3: 1, 8: 2, 2: 3.
            Hierna gaan we kijken of de nummers op de kaarten in increasing volgorde staan als dit niet zo is returnen we IMPOSSIBLE. Als dit wel zo is gaan we een lijst maken waar alleen de unieke nummers inzitten
            </p>
            <p className="mb-4 text-lg">
            Nu moeten we alleen nog de strings een beetje formateren zodat ze voldoen aan de voorwaarden.
            </p>
            </div>
        </div>
        </main>
    )
}