import Layout from "../../../components/layout/Layout";
import Head from "../../../components/layout/Head";
import { BASE_URL_BEHANDLING} from "../../../constants/api";
import Link from "next/link";

export default function Treatment({ treatment }) {
	return (
		<Layout>
			<Head title={treatment.title.rendered} />
			<div className="service-background">
				<div className="service-info">
					<h2>{treatment.title.rendered}</h2>
					<p>{treatment.excerpt.rendered}</p>
					<Link href="/services">
						<button>Lukk </button>
					</Link>
				</div>
			</div>
		</Layout>
	);
}

export async function getStaticPaths() {
	const response = await fetch(BASE_URL_BEHANDLING);
	const treatments = await response.json();

	console.log(treatments);

	const paths = treatments.map((treatment) => ({
		params: { id: treatment.id.toString() },
	}));

	console.log(paths);

	return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
	const res = await fetch(
		`https://hairways.yvonnehelander.info/wp-json/wp/v2/posts/${params.id}`
	);
	const treatment = await res.json();

	return {
		props: { treatment: treatment },
	};
}
