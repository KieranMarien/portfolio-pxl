import ListItem from "@/components/blogListItem";
import Navbar from "@/components/navbar";

export default function Home() {
    return(
        <main className="bg-pattern flex min-h-screen flex-col items-center justify-between p-24">
                    <title>Activities page</title>

                <div className="z-10 w-full max-w-5xl flex flex-col items-center justify-between font-mono text-sm lg:flex-row ">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            By  { 'Kieran Marien'}
        </div>
        <Navbar/>
      </div>
            <ul>
                <ListItem imageSrc={'/blog/pxl-log.png'} title={"PXL Hackathon"} description={"2-daagse hackaton met voor PXL-Healthcare. Applicatie maken voor kinderen met motorische beperkingen om wiskunde te doen. "} date={"2/02/2023 🡪 23/02/2023"} backLink={"/blog/pxl-hackathon"} />
                <ListItem imageSrc={'/blog/Google_-G-_Logo.svg'} title={"Google codejam"} description={"Google farewell round code jam. De laatste codejam die gehost wordt door google."} date={"15/04/2022"} backLink={"/blog/google-codejam"} />
                <ListItem imageSrc={'vercel.svg'} title={"Deze website"} description={"Deze website, stappen hoe ik het heb gebouwd met voorbeelden"} date={"4/2022"} backLink={"/blog/portfolio"} />
            </ul>
        </main>
    )
}