import Image from "next/image";
import Link from "next/link";

export default function Banner() {
    return (
   <div className="banner-image">
    <Image src ="/bakgrunn_index.jpeg" width="2000" height="867" alt="My image"/>
    <div className="banner-text">
        <h1>Hairways</h1>

        <h2>Din dame og herre frisør på straume</h2>

        <h3>Ring: 55 44 33 11</h3>
        
        <p>Hos oss kan du senke skuldrene og slappe av. Vi tilbyr alt fra enkel hårklipp til full brudepynting. 
           Bestill time på Tlf.  98 1000 11 , book på nett eller kom innom for en drop-in time. Vår frisørsalong holder til 
           i helsehuset ved shellstasjonen på Straume ved Sartor storsenter.
        </p>
    </div>
    <Link href="www.hairways.no"><button  className="banner-button" >Bestill time</button></Link>
   </div>
    );
   }