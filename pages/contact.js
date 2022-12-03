import Head from "next/head";
import Layout from "../components/layout/_layout";
import Phone from "../components/icons/_phone";
import Mail from "../components/icons/_mail";
import MapIcon from "../components/icons/_map-icon";

export default function Contact() {
	return (
		<Layout>
			<Head>
				<title>Kontakt </title>
			</Head>
			<div class="contact">
				<div class="contact-info">
					<h2>LURER DU PÅ NOE?</h2>
					<p>
						Ta gjerne kontakt med oss om du har noen spørsmål om våre tjenester.
					</p>
					<p>
						<Phone /> 98 10 00 11
					</p>
					<p>
						<Mail /> Post@hairways.no
					</p>
					<p>
						<MapIcon /> Sartorveien 10, 5353 Straume
					</p>
				</div>
				<form class="contact-form">
					<h3>Send oss en melding</h3>
					<div class="form-group">
						<label for="exampleFormControlInput1">Navn</label>
						<input
							type="email"
							class="form-control"
							id="exampleFormControlInput1"
							placeholder="Ditt navn"
						/>
					</div>
					<div class="form-group">
						<label for="exampleFormControlInput1">Email adresse</label>
						<input
							type="email"
							class="form-control"
							id="exampleFormControlInput1"
							placeholder="name@example.com"
						/>
					</div>

					<div class="form-group">
						<label for="exampleFormControlTextarea1">Din melding</label>
						<textarea
							class="form-control"
							id="exampleFormControlTextarea1"
							rows="3"
						></textarea>
					</div>
					<button>Send</button>
				</form>
			</div>
		</Layout>
	);
}
