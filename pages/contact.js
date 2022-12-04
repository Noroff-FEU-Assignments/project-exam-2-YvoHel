import Head from "../components/layout/Head"
import Layout from "../components/layout/Layout";
import Phone from "../components/icons/PhoneIcon";
import Mail from "../components/icons/MailIcon";
import MapIcon from "../components/icons/MapIcon";
import ContactForm from "../components/form/ContactForm";

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
				<ContactForm/>
			</div>
		</Layout>
	);
}
