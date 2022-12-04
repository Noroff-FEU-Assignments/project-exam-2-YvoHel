import Head from "../components/layout/Head"
import Layout from "../components/layout/Layout";
import axios from "axios";
import {
	BASE_URL_BEHANDLING,
	BASE_URL_FARGE,
	BASE_URL_KLIPP,
} from "../constants/api";
import FaInfo from "../components/icons/InfoIcon";

export default function Servises(props) {
	console.log(props);

	return (
		<Layout>
			<Head title="Behandlinger" />
			<div className="services">
				<div className="services-intro">
					<h1>Våre behandlinger</h1>
					<p>
						Alle priser er FRA priser. Kort hår = ned til nakke. Langt hår = fra
						skulder og ned. NB! Om det er fullt på nettsiden, ring så prøver vi
						å finne time til deg. Det finnes et utvalg behandlinger som vi ikke
						tilbyr på Online bestilling. Ring for nærmere informasjon.
					</p>
				</div>
				<div className="service-list">
					<div className="cut-container">
						<h2>Klipp</h2>
						{props.cut.map((cut) => {
							return (
								<a key={cut.id} href={`services/cut/${cut.id}`}>
									<h3>{cut.title.rendered}  <FaInfo/></h3>
								</a>
							);
						})}
					</div>
					<div className="color-container">
						<h2>Farge</h2>
						{props.color.map((color) => {
							return (
								<a key={color.id} href={`services/color/${color.id}`}>
									<h3>{color.title.rendered}  <FaInfo/></h3>
								</a>
							);
						})}
					</div>
					<div className="treatment-container">
						<h2>Behandlinger</h2>
						{props.treat.map((treat) => {
							return (
								<a key={treat.id} href={`services/treatment/${treat.id}`}>
									<h3>{treat.title.rendered}  <FaInfo/></h3>
                  
								</a>
							);
						})}
					</div>
				</div>
			</div>
		</Layout>
	);
}

export async function getStaticProps() {
	let cut = [];
	let treat = [];
	let color = [];

	try {
		const response = await axios.get(BASE_URL_KLIPP);

		console.log(response.data);

		cut = response.data;
	} catch (error) {
		console.log(error);
	}

	try {
		const resp = await axios.get(BASE_URL_BEHANDLING);

		console.log(resp.data);

		treat = resp.data;
	} catch (error) {
		console.log(error);
	}

	try {
		const res = await axios.get(BASE_URL_FARGE);

		console.log(res.data);

		color = res.data;
	} catch (error) {
		console.log(error);
	}

	return {
		props: {
			cut: cut,
			treat: treat,
			color: color,
		},
	};
}
