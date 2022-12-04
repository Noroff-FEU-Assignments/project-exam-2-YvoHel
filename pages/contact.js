import Head from "../components/layout/Head"
import Layout from "../components/layout/Layout";
import Phone from "../components/icons/PhoneIcon";
import Mail from "../components/icons/MailIcon";
import MapIcon from "../components/icons/MapIcon";

export default function Contact() {
	return (
		<Layout>
			<Head>
				<title>Kontakt </title>
			</Head>
			<div className="contact">
				<div className="contact-info">
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
				<form className="contact-form">
					<h3>Send oss en melding</h3>
					<div className="form-group">
						<label for="exampleFormControlInput1">Navn</label>
						<input
							type="email"
							className="form-control"
							id="exampleFormControlInput1"
							placeholder="Ditt navn"
						/>
					</div>
					<div className="form-group">
						<label for="exampleFormControlInput1">Email adresse</label>
						<input
							type="email"
							className="form-control"
							id="exampleFormControlInput1"
							placeholder="name@example.com"
						/>
					</div>

					<div className="form-group">
						<label for="exampleFormControlTextarea1">Din melding</label>
						<textarea
							className="form-control"
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
