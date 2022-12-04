import Head from "../components/layout/Head"
import Layout from "../components/layout/Layout";
import axios from "axios";
import Link from "next/link";
import { BASE_URL_ANSATTE } from "../constants/api";
import Pen from "../components/icons/PenIcon";
import AddIcon from "../components/icons/AddIcon";
import ArrowLeft from "../components/icons/ArrowLeft";

export default function EmployesAdmin(props) {
	return (
		<Layout>
			<Head></Head>
			<title>Admin</title>
			<div className="edit">
				<h2>
					<Link Link legacyBehavior href="/admin">
						<a>
							<ArrowLeft />
						</a>
					</Link>{" "}
					Ansatte
				</h2>
				<Link Link legacyBehavior href="/add/addEmploye">
					<a>
						Legg til ansatt  <AddIcon />
					</a>
				</Link>
				{props.employes.map((employe) => {
					return (
						<a key={employe.id}
							href={`editPage/${employe.id}`}
							className="edit-card">
							<h3>{employe.title.rendered}</h3>{" "}
							<p><Pen /></p>
						</a>
					);
				})}
			</div>
		</Layout>
	);
}

export async function getStaticProps() {
	let employes = [];

	try {
		const response = await axios.get(BASE_URL_ANSATTE);

		console.log(response.data);

		employes = response.data;
	} catch (error) {
		console.log(error);
	}

	return {
		props: {
			employes: employes,
		},
	};
}
