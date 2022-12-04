import Layout from "../components/layout/Layout";
import Head from "../components/layout/Head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<Layout>
			<Head />
			<h2 className="tlf-nubmer">
				<span>Ring: 55 44 33 11</span>
			</h2>
			<div className="banner-image">
				<Image
					src="/bakgrunn_index.jpeg"
					width="2000"
					height="867"
					alt="My image"
				/>
				<div className="banner-text">
					<h1>Hairways</h1>
					<h2>Din dame og herre frisør på straume</h2>
					<p>
						Hos oss kan du senke skuldrene og slappe av. Vi tilbyr alt fra enkel
						hårklipp til full brudepynting. Bestill time på Tlf. 98 1000 11 ,
						book på nett eller kom innom for en drop-in time. Vår frisørsalong
						holder til i helsehuset ved shellstasjonen på Straume ved Sartor
						storsenter.
					</p>
				</div>
				<Link legacyBehavior href="www.hairways.no">
					<button className="banner-button">Bestill time</button>
				</Link>
			</div>
			<div className="openinghours-container">
            <div className="openinghours">
                <h2 >Åpningstider</h2>
                <pre>
                    <p>Mandag - Fredag:  10:00 - 18:00</p>
                    <p>Lørdag:                   10:00 - 15:00</p>
                    <p>Søndag:                             Stengt</p>
                </pre>
            </div>
                <iframe
					className="google-map"
					src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d986.6362881867931!2d5.1237638584168295!3d60.35813557206702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sSartorvegen%2010%2C%205353%20Straume!5e0!3m2!1sno!2sno!4v1668162264719!5m2!1sno!2sno"
					width="600"
					height="450"
					allowfullscreen=""
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade">
                </iframe>

			</div>
		</Layout>
	);
}
