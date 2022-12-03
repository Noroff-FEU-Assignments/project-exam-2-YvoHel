import Head from "next/head";
import Layout from "../components/layout/_layout";
import axios from "axios";
import Link from "next/link";
import {
	BASE_URL_BEHANDLING,
	BASE_URL_FARGE,
	BASE_URL_KLIPP,
} from "../constants/api";
import Pen from "../components/icons/_pen-icon";
import AddIcon from "../components/icons/_add-icon";
import ArrowLeft from "../components/icons/_arrow-left";

export default function Servises(props) {
	console.log(props);

	return (
		<Layout>
			<Head title="Behandlinger" />
			<h1 className="services-headline">
				<Link href="/admin">
					<a>
						<ArrowLeft />
					</a>
				</Link>{" "}
				Behandlinger
			</h1>
			<div className="service-container">
				<div className="edit">
					<h2>Klipp</h2>
					<Link href="/add/addCut">
						<a>
							Add Cut <AddIcon />
						</a>
					</Link>
					{props.cut.map((cut) => {
						return (
							<a key={cut.id} href={`editPage/${cut.id}`} className="edit-card">
								<h3>{cut.title.rendered}</h3>
								<p>
									<Pen />
								</p>
							</a>
						);
					})}
				</div>

				<div className="edit">
					<h2>Farge</h2>
					<Link href="/add/addColor">
						<a>
							Add Color
							<AddIcon />
						</a>
					</Link>
					{props.color.map((color) => {
						return (
							<a key={color.id} href={`editPage/${color.id}`} className="edit-card">
								<h3>{color.title.rendered}</h3>
								<p>
									<Pen />
								</p>
							</a>
						);
					})}
				</div>

				<div className="edit">
					<h2>Behandlinger</h2>
					<Link href="/add/addTreatment">
						<a>
							Add Treatment <AddIcon />
						</a>
					</Link>
					{props.treat.map((treat) => {
						return (
							<a key={treat.id} href={`editPage/${treat.id}`} className="edit-card">
								<h3>{treat.title.rendered}</h3>
								<p>
									<Pen />
								</p>
							</a>
						);
					})}
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
