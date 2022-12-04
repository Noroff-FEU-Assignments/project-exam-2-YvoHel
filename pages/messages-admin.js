import Head from "../components/layout/Head"
import Layout from "../components/layout/Layout";
import axios from "axios";
import Link from "next/link";
import { BASE_URL_ANSATTE } from "../constants/api";

export default function EmployesAdmin(props) {
	return (
		<Layout>
			<Head></Head>
			<Link Link legacyBehavior href="/add/addEmploye">
				<a>Add post</a>
			</Link>
			<title>Admin</title>
			{props.employes.map((employe) => {
				return (
					<a key={employe.id} href={`editPages/employes/${employe.id}`}>
						{employe.id} <button>Edit</button>
					</a>
				);
			})}
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
