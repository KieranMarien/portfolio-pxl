import ListItem from "@/components/blogListItem";
import Navbar from "@/components/navbar";

export default function Home() {
    return(
        <main className="bg-pattern flex min-h-screen flex-col items-center justify-between p-24">
                <div className="z-10 w-full max-w-5xl flex flex-col items-center justify-between font-mono text-sm lg:flex-row ">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            By  { 'Kieran Marien'}
        </div>
        <Navbar/>
      </div>
            <ul>
                <ListItem imageSrc={'/blog/vuejs-icon.svg'} title={"Seminarie Appwise"} description={"Appwise/Wisemen: Interactive web apps with Vue (AON)"} date={"17/05/2022"} backLink={""} />
                <ListItem imageSrc={'/blog/vuejs-icon.svg'} title={"Seminarie Appwise"} description={"Appwise/Wisemen: Interactive web apps with Vue (AON)"} date={"17/05/2022"} backLink={""} />
                <ListItem imageSrc={'/blog/vuejs-icon.svg'} title={"Seminarie Appwise"} description={"Appwise/Wisemen: Interactive web apps with Vue (AON)"} date={"17/05/2022"} backLink={""} />
                <ListItem imageSrc={'/blog/vuejs-icon.svg'} title={"Seminarie Appwise"} description={"Appwise/Wisemen: Interactive web apps with Vue (AON)"} date={"17/05/2022"} backLink={""} />
                <ListItem imageSrc={'/blog/vuejs-icon.svg'} title={"Seminarie Appwise"} description={"Appwise/Wisemen: Interactive web apps with Vue (AON)"} date={"17/05/2022"} backLink={""} />
                <ListItem imageSrc={'/blog/vuejs-icon.svg'} title={"Seminarie Appwise"} description={"Appwise/Wisemen: Interactive web apps with Vue (AON)"} date={"17/05/2022"} backLink={""} />
                <ListItem imageSrc={'/blog/vuejs-icon.svg'} title={"Seminarie Appwise"} description={"Appwise/Wisemen: Interactive web apps with Vue (AON)"} date={"17/05/2022"} backLink={""} />
                <ListItem imageSrc={'/blog/vuejs-icon.svg'} title={"Seminarie Appwise"} description={"Appwise/Wisemen: Interactive web apps with Vue (AON)"} date={"17/05/2022"} backLink={""} />
                <ListItem imageSrc={'/blog/vuejs-icon.svg'} title={"Seminarie Appwise"} description={"Appwise/Wisemen: Interactive web apps with Vue (AON)"} date={"17/05/2022"} backLink={""} />
            </ul>
        </main>
    )
}